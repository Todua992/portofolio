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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; },\n/* harmony export */   HeroParallax: function() { return /* binding */ HeroParallax; },\n/* harmony export */   ProductCard: function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ HeroParallax,Header,ProductCard auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst HeroParallax = (param)=>{\n    let { products } = param;\n    _s();\n    const firstRow = products.slice(0, 3);\n    const secondRow = products.slice(3, 6);\n    const thirdRow = products.slice(6, 9);\n    const ref = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n    const { scrollYProgress } = useScroll({\n        target: ref,\n        offset: [\n            \"start start\",\n            \"end start\"\n        ]\n    });\n    const springConfig = {\n        stiffness: 300,\n        damping: 30,\n        bounce: 100\n    };\n    const translateX = useSpring(useTransform(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        600\n    ]), springConfig);\n    const translateXReverse = useSpring(useTransform(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        -600\n    ]), springConfig);\n    const rotateX = useSpring(useTransform(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        15,\n        0\n    ]), springConfig);\n    const opacity = useSpring(useTransform(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        0.5,\n        1\n    ]), springConfig);\n    const rotateZ = useSpring(useTransform(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        20,\n        0\n    ]), springConfig);\n    const translateY = useSpring(useTransform(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        -700,\n        500\n    ]), springConfig);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"projects\",\n        ref: ref,\n        className: \"mx-auto max-w-5xl px-8 pb-8 relative flex h-[200vh] flex-col self-auto overflow-visible pb-10 pt-80 antialiased [perspective:1000px] [transform-style:preserve-3d]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                style: {\n                    rotateX,\n                    rotateZ,\n                    translateY,\n                    opacity\n                },\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"mb-20 flex flex-row-reverse space-x-20 space-x-reverse\",\n                        children: firstRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product,\n                                translate: translateX\n                            }, product.title, false, {\n                                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"mb-20 flex flex-row space-x-20\",\n                        children: secondRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product,\n                                translate: translateXReverse\n                            }, product.title, false, {\n                                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"flex flex-row-reverse space-x-20 space-x-reverse\",\n                        children: thirdRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product,\n                                translate: translateX\n                            }, product.title, false, {\n                                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HeroParallax, \"R8/dTk9CmVkuZMulzDierWMPHkc=\", true);\n_c = HeroParallax;\nconst Header = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative left-0 top-0 mx-auto w-full max-w-5xl px-4 py-20 md:py-40\",\n        style: {\n            zIndex: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-2xl font-bold dark:text-white md:text-7xl\",\n            children: \"Projects\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n            lineNumber: 73,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Header;\nconst ProductCard = (param)=>{\n    let { product } = param;\n    const isMP4 = (thumbnail)=>thumbnail.endsWith(\".mp4\");\n    if (isMP4(product.thumbnail)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            whileHover: {\n                y: -20\n            },\n            className: \"group/product relative h-96 w-[40rem] shrink-0\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: product.link,\n                    className: \"block group-hover:shadow-2xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        width: \"600\",\n                        height: \"600\",\n                        className: \"absolute inset-0 size-full object-cover object-center\",\n                        autoPlay: true,\n                        loop: true,\n                        muted: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: product.thumbnail,\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 25\n                            }, undefined),\n                            \"Your browser does not support the video tag.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pointer-events-none absolute inset-0 size-full bg-black opacity-0 group-hover/product:opacity-80\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100\",\n                    children: product.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, product.title, true, {\n            fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n            lineNumber: 91,\n            columnNumber: 13\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        whileHover: {\n            y: -20\n        },\n        className: \"group/product relative h-96 w-[40rem] shrink-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: product.link,\n                className: \"block group-hover/product:shadow-2xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: product.thumbnail,\n                    height: \"600\",\n                    width: \"600\",\n                    className: \"absolute inset-0 size-full object-cover object-center\",\n                    alt: product.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 125,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pointer-events-none absolute inset-0 size-full bg-black opacity-0 group-hover/product:opacity-80\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 134,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100\",\n                children: product.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 135,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, product.title, true, {\n        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n        lineNumber: 118,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = ProductCard;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HeroParallax\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2hlcm8tcGFyYWxheC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUN1QztBQUVWO0FBQ0g7QUFFbkIsTUFBTUcsZUFBZTtRQUFDLEVBQ3pCQyxRQUFRLEVBT1g7O0lBQ0csTUFBTUMsV0FBV0QsU0FBU0UsS0FBSyxDQUFDLEdBQUc7SUFDbkMsTUFBTUMsWUFBWUgsU0FBU0UsS0FBSyxDQUFDLEdBQUc7SUFDcEMsTUFBTUUsV0FBV0osU0FBU0UsS0FBSyxDQUFDLEdBQUc7SUFDbkMsTUFBTUcsTUFBTVAsbURBQVksQ0FBQztJQUN6QixNQUFNLEVBQUVTLGVBQWUsRUFBRSxHQUFHQyxVQUFVO1FBQ2xDQyxRQUFRSjtRQUNSSyxRQUFRO1lBQUM7WUFBZTtTQUFZO0lBQ3hDO0lBRUEsTUFBTUMsZUFBZTtRQUFFQyxXQUFXO1FBQUtDLFNBQVM7UUFBSUMsUUFBUTtJQUFJO0lBRWhFLE1BQU1DLGFBQWFDLFVBQVVDLGFBQWFWLGlCQUFpQjtRQUFDO1FBQUc7S0FBRSxFQUFFO1FBQUM7UUFBRztLQUFJLEdBQUdJO0lBQzlFLE1BQU1PLG9CQUFvQkYsVUFBVUMsYUFBYVYsaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFHLENBQUM7S0FBSSxHQUFHSTtJQUN0RixNQUFNUSxVQUFVSCxVQUFVQyxhQUFhVixpQkFBaUI7UUFBQztRQUFHO0tBQUksRUFBRTtRQUFDO1FBQUk7S0FBRSxHQUFHSTtJQUM1RSxNQUFNUyxVQUFVSixVQUFVQyxhQUFhVixpQkFBaUI7UUFBQztRQUFHO0tBQUksRUFBRTtRQUFDO1FBQUs7S0FBRSxHQUFHSTtJQUM3RSxNQUFNVSxVQUFVTCxVQUFVQyxhQUFhVixpQkFBaUI7UUFBQztRQUFHO0tBQUksRUFBRTtRQUFDO1FBQUk7S0FBRSxHQUFHSTtJQUM1RSxNQUFNVyxhQUFhTixVQUFVQyxhQUFhVixpQkFBaUI7UUFBQztRQUFHO0tBQUksRUFBRTtRQUFDLENBQUM7UUFBSztLQUFJLEdBQUdJO0lBQ25GLHFCQUNJLDhEQUFDWTtRQUNMQyxJQUFHO1FBQ0huQixLQUFLQTtRQUNMb0IsV0FBVTs7MEJBRVYsOERBQUNDOzs7OzswQkFDRCw4REFBQzlCLGlEQUFNQSxDQUFDMkIsR0FBRztnQkFDUEksT0FBTztvQkFDSFI7b0JBQ0FFO29CQUNBQztvQkFDQUY7Z0JBQ0o7Z0JBQ0FLLFdBQVU7O2tDQUVWLDhEQUFDN0IsaURBQU1BLENBQUMyQixHQUFHO3dCQUFDRSxXQUFVO2tDQUNqQnhCLFNBQVMyQixHQUFHLENBQUMsQ0FBQ0Msd0JBQ1gsOERBQUNDO2dDQUFZRCxTQUFTQTtnQ0FBU0UsV0FBV2hCOytCQUFpQmMsUUFBUUcsS0FBSzs7Ozs7Ozs7OztrQ0FHaEYsOERBQUNwQyxpREFBTUEsQ0FBQzJCLEdBQUc7d0JBQUNFLFdBQVU7a0NBQ2pCdEIsVUFBVXlCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDWiw4REFBQ0M7Z0NBQVlELFNBQVNBO2dDQUFTRSxXQUFXYjsrQkFBd0JXLFFBQVFHLEtBQUs7Ozs7Ozs7Ozs7a0NBR3ZGLDhEQUFDcEMsaURBQU1BLENBQUMyQixHQUFHO3dCQUFDRSxXQUFVO2tDQUNqQnJCLFNBQVN3QixHQUFHLENBQUMsQ0FBQ0Msd0JBQ1gsOERBQUNDO2dDQUFZRCxTQUFTQTtnQ0FBU0UsV0FBV2hCOytCQUFpQmMsUUFBUUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94RixFQUFFO0dBN0RXakM7S0FBQUE7QUErRE4sTUFBTTJCLFNBQVM7SUFDbEIscUJBQ0ksOERBQUNIO1FBQUlFLFdBQVU7UUFBcUVFLE9BQU87WUFBRU0sUUFBUTtRQUFFO2tCQUNuRyw0RUFBQ0M7WUFBR1QsV0FBVTtzQkFBaUQ7Ozs7Ozs7Ozs7O0FBRzNFLEVBQUU7TUFOV0M7QUFRTixNQUFNSSxjQUFjO1FBQUMsRUFDeEJELE9BQU8sRUFPVjtJQUNHLE1BQU1NLFFBQVEsQ0FBQ0MsWUFBc0JBLFVBQVVDLFFBQVEsQ0FBQztJQUV4RCxJQUFJRixNQUFNTixRQUFRTyxTQUFTLEdBQUc7UUFDMUIscUJBQ0ksOERBQUN4QyxpREFBTUEsQ0FBQzJCLEdBQUc7WUFDUGUsWUFBWTtnQkFDUkMsR0FBRyxDQUFDO1lBQ1I7WUFFQWQsV0FBVTs7OEJBRVYsOERBQUM1QixpREFBSUE7b0JBQUMyQyxNQUFNWCxRQUFRWSxJQUFJO29CQUFFaEIsV0FBVTs4QkFDaEMsNEVBQUNpQjt3QkFDR0MsT0FBTTt3QkFDTkMsUUFBTzt3QkFDUG5CLFdBQVU7d0JBQ1ZvQixRQUFRO3dCQUNSQyxJQUFJO3dCQUNKQyxLQUFLOzswQ0FFTCw4REFBQ0M7Z0NBQU9DLEtBQUtwQixRQUFRTyxTQUFTO2dDQUFFYyxNQUFLOzs7Ozs7NEJBQWM7Ozs7Ozs7Ozs7Ozs4QkFJM0QsOERBQUMzQjtvQkFBSUUsV0FBVTs7Ozs7OzhCQUNmLDhEQUFDMEI7b0JBQUcxQixXQUFVOzhCQUFpRkksUUFBUUcsS0FBSzs7Ozs7OztXQWpCdkdILFFBQVFHLEtBQUs7Ozs7O0lBb0I5QjtJQUVBLHFCQUNJLDhEQUFDcEMsaURBQU1BLENBQUMyQixHQUFHO1FBQ1BlLFlBQVk7WUFDUkMsR0FBRyxDQUFDO1FBQ1I7UUFFQWQsV0FBVTs7MEJBRVYsOERBQUM1QixpREFBSUE7Z0JBQUMyQyxNQUFNWCxRQUFRWSxJQUFJO2dCQUFFaEIsV0FBVTswQkFDaEMsNEVBQUMyQjtvQkFDR0gsS0FBS3BCLFFBQVFPLFNBQVM7b0JBQ3RCUSxRQUFPO29CQUNQRCxPQUFNO29CQUNObEIsV0FBVTtvQkFDVjRCLEtBQUt4QixRQUFRRyxLQUFLOzs7Ozs7Ozs7OzswQkFHMUIsOERBQUNUO2dCQUFJRSxXQUFVOzs7Ozs7MEJBQ2YsOERBQUMwQjtnQkFBRzFCLFdBQVU7MEJBQWlGSSxRQUFRRyxLQUFLOzs7Ozs7O09BYnZHSCxRQUFRRyxLQUFLOzs7OztBQWdCOUIsRUFBRTtNQTVEV0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvaGVyby1wYXJhbGF4LnRzeD84ZjM0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvUGFyYWxsYXggPSAoe1xyXG4gICAgcHJvZHVjdHNcclxufToge1xyXG4gICAgcHJvZHVjdHM6IHtcclxuICAgICAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgICAgIGxpbms6IHN0cmluZztcclxuICAgICAgICB0aHVtYm5haWw6IHN0cmluZztcclxuICAgIH1bXTtcclxufSkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3RSb3cgPSBwcm9kdWN0cy5zbGljZSgwLCAzKTtcclxuICAgIGNvbnN0IHNlY29uZFJvdyA9IHByb2R1Y3RzLnNsaWNlKDMsIDYpO1xyXG4gICAgY29uc3QgdGhpcmRSb3cgPSBwcm9kdWN0cy5zbGljZSg2LCA5KTtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xyXG4gICAgICAgIHRhcmdldDogcmVmLFxyXG4gICAgICAgIG9mZnNldDogWydzdGFydCBzdGFydCcsICdlbmQgc3RhcnQnXVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3ByaW5nQ29uZmlnID0geyBzdGlmZm5lc3M6IDMwMCwgZGFtcGluZzogMzAsIGJvdW5jZTogMTAwIH07XHJcblxyXG4gICAgY29uc3QgdHJhbnNsYXRlWCA9IHVzZVNwcmluZyh1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFswLCA2MDBdKSwgc3ByaW5nQ29uZmlnKTtcclxuICAgIGNvbnN0IHRyYW5zbGF0ZVhSZXZlcnNlID0gdXNlU3ByaW5nKHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzAsIC02MDBdKSwgc3ByaW5nQ29uZmlnKTtcclxuICAgIGNvbnN0IHJvdGF0ZVggPSB1c2VTcHJpbmcodXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMl0sIFsxNSwgMF0pLCBzcHJpbmdDb25maWcpO1xyXG4gICAgY29uc3Qgb3BhY2l0eSA9IHVzZVNwcmluZyh1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4yXSwgWzAuNSwgMV0pLCBzcHJpbmdDb25maWcpO1xyXG4gICAgY29uc3Qgcm90YXRlWiA9IHVzZVNwcmluZyh1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4yXSwgWzIwLCAwXSksIHNwcmluZ0NvbmZpZyk7XHJcbiAgICBjb25zdCB0cmFuc2xhdGVZID0gdXNlU3ByaW5nKHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjJdLCBbLTcwMCwgNTAwXSksIHNwcmluZ0NvbmZpZyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgXHJcbiAgICBpZD1cInByb2plY3RzXCJcclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy01eGwgcHgtOCBwYi04IHJlbGF0aXZlIGZsZXggaC1bMjAwdmhdIGZsZXgtY29sIHNlbGYtYXV0byBvdmVyZmxvdy12aXNpYmxlIHBiLTEwIHB0LTgwIGFudGlhbGlhc2VkIFtwZXJzcGVjdGl2ZToxMDAwcHhdIFt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2RdXCJcclxuPlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICByb3RhdGVYLFxyXG4gICAgICAgICAgICByb3RhdGVaLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVZLFxyXG4gICAgICAgICAgICBvcGFjaXR5XHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIm1iLTIwIGZsZXggZmxleC1yb3ctcmV2ZXJzZSBzcGFjZS14LTIwIHNwYWNlLXgtcmV2ZXJzZVwiPlxyXG4gICAgICAgICAgICB7Zmlyc3RSb3cubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgcHJvZHVjdD17cHJvZHVjdH0gdHJhbnNsYXRlPXt0cmFuc2xhdGVYfSBrZXk9e3Byb2R1Y3QudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJtYi0yMCBmbGV4IGZsZXgtcm93IHNwYWNlLXgtMjBcIj5cclxuICAgICAgICAgICAge3NlY29uZFJvdy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBwcm9kdWN0PXtwcm9kdWN0fSB0cmFuc2xhdGU9e3RyYW5zbGF0ZVhSZXZlcnNlfSBrZXk9e3Byb2R1Y3QudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93LXJldmVyc2Ugc3BhY2UteC0yMCBzcGFjZS14LXJldmVyc2VcIj5cclxuICAgICAgICAgICAge3RoaXJkUm93Lm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9IHRyYW5zbGF0ZT17dHJhbnNsYXRlWH0ga2V5PXtwcm9kdWN0LnRpdGxlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbGVmdC0wIHRvcC0wIG14LWF1dG8gdy1mdWxsIG1heC13LTV4bCBweC00IHB5LTIwIG1kOnB5LTQwXCIgc3R5bGU9e3sgekluZGV4OiAxIH19PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIGRhcms6dGV4dC13aGl0ZSBtZDp0ZXh0LTd4bFwiPlByb2plY3RzPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdENhcmQgPSAoe1xyXG4gICAgcHJvZHVjdFxyXG59OiB7XHJcbiAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgdGl0bGU6IHN0cmluZztcclxuICAgICAgICBsaW5rOiBzdHJpbmc7XHJcbiAgICAgICAgdGh1bWJuYWlsOiBzdHJpbmc7XHJcbiAgICB9O1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBpc01QNCA9ICh0aHVtYm5haWw6IHN0cmluZykgPT4gdGh1bWJuYWlsLmVuZHNXaXRoKCcubXA0Jyk7XHJcblxyXG4gICAgaWYgKGlzTVA0KHByb2R1Y3QudGh1bWJuYWlsKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgeTogLTIwXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAvcHJvZHVjdCByZWxhdGl2ZSBoLTk2IHctWzQwcmVtXSBzaHJpbmstMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2R1Y3QubGlua30gY2xhc3NOYW1lPVwiYmxvY2sgZ3JvdXAtaG92ZXI6c2hhZG93LTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgc2l6ZS1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e3Byb2R1Y3QudGh1bWJuYWlsfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LTAgc2l6ZS1mdWxsIGJnLWJsYWNrIG9wYWNpdHktMCBncm91cC1ob3Zlci9wcm9kdWN0Om9wYWNpdHktODBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCBsZWZ0LTQgdGV4dC13aGl0ZSBvcGFjaXR5LTAgZ3JvdXAtaG92ZXIvcHJvZHVjdDpvcGFjaXR5LTEwMFwiPntwcm9kdWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgeTogLTIwXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGtleT17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAvcHJvZHVjdCByZWxhdGl2ZSBoLTk2IHctWzQwcmVtXSBzaHJpbmstMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9kdWN0Lmxpbmt9IGNsYXNzTmFtZT1cImJsb2NrIGdyb3VwLWhvdmVyL3Byb2R1Y3Q6c2hhZG93LTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC50aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNjAwXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBzaXplLWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LTAgc2l6ZS1mdWxsIGJnLWJsYWNrIG9wYWNpdHktMCBncm91cC1ob3Zlci9wcm9kdWN0Om9wYWNpdHktODBcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00IGxlZnQtNCB0ZXh0LXdoaXRlIG9wYWNpdHktMCBncm91cC1ob3Zlci9wcm9kdWN0Om9wYWNpdHktMTAwXCI+e3Byb2R1Y3QudGl0bGV9PC9oMj5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsibW90aW9uIiwiTGluayIsIlJlYWN0IiwiSGVyb1BhcmFsbGF4IiwicHJvZHVjdHMiLCJmaXJzdFJvdyIsInNsaWNlIiwic2Vjb25kUm93IiwidGhpcmRSb3ciLCJyZWYiLCJ1c2VSZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ1c2VTY3JvbGwiLCJ0YXJnZXQiLCJvZmZzZXQiLCJzcHJpbmdDb25maWciLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiYm91bmNlIiwidHJhbnNsYXRlWCIsInVzZVNwcmluZyIsInVzZVRyYW5zZm9ybSIsInRyYW5zbGF0ZVhSZXZlcnNlIiwicm90YXRlWCIsIm9wYWNpdHkiLCJyb3RhdGVaIiwidHJhbnNsYXRlWSIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwic3R5bGUiLCJtYXAiLCJwcm9kdWN0IiwiUHJvZHVjdENhcmQiLCJ0cmFuc2xhdGUiLCJ0aXRsZSIsInpJbmRleCIsImgxIiwiaXNNUDQiLCJ0aHVtYm5haWwiLCJlbmRzV2l0aCIsIndoaWxlSG92ZXIiLCJ5IiwiaHJlZiIsImxpbmsiLCJ2aWRlbyIsIndpZHRoIiwiaGVpZ2h0IiwiYXV0b1BsYXkiLCJsb29wIiwibXV0ZWQiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwiaDIiLCJpbWciLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/hero-paralax.tsx\n"));

/***/ })

});