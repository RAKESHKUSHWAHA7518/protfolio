"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Contact = (param)=>{\n    let { info  } = param;\n    _s();\n    const [mailData, setMailData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        email: \"\",\n        message: \"\"\n    });\n    const { social_handles  } = info.user;\n    const tt = \"https://\".concat(social_handles.platform, \".com/\");\n    console.log(\"https://\".concat(social_handles.platform, \".com/\"));\n    const { name , email , message  } = mailData;\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const onChange = (e)=>setMailData({\n            ...mailData,\n            [e.target.name]: e.target.value\n        });\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        if (name.length === 0 || email.length === 0 || message.length === 0) {\n            setError(true);\n            clearError();\n        } else {\n            emailjs_com__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(\"service_seruhwu\", \"template_21aw58z\", mailData, \"Q3pccdLZhU-mZT7tQ\" // public api\n            ).then((response)=>{\n                setError(false);\n                clearError();\n                setMailData({\n                    name: \"\",\n                    email: \"\",\n                    message: \"\"\n                });\n            }, (err)=>{\n                console.log(err.text);\n            });\n        }\n    };\n    const clearError = ()=>{\n        setTimeout(()=>{\n            setError(null);\n        }, 2000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"contact-section\",\n        id: \"contact\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"contact-info-cont\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"contact-info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"section_title wow fadeInUp\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Let's Connect\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"wow fadeInUp\",\n                                children: \"Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"contact-social wow fadeInUp\",\n                                children: social_handles.map((social, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: social.url ? social.url : \"https://\".concat(social.platform, \".com\"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"fab fa-\".concat(social.platform.toLowerCase())\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 51\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"contact-form wow fadeInUp\",\n                        onSubmit: (e)=>onSubmit(e),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Let's message me and mack something together\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"input-control\",\n                                placeholder: \"Your Name\",\n                                name: \"name\",\n                                onChange: (e)=>onChange(e),\n                                value: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"input-control\",\n                                placeholder: \"Your Email\",\n                                name: \"email\",\n                                onChange: (e)=>onChange(e),\n                                value: email\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"input-control\",\n                                placeholder: \"Message\",\n                                defaultValue: \"\",\n                                name: \"message\",\n                                onChange: (e)=>onChange(e),\n                                value: message\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: error ? \"empty_notice\" : \"returnmessage\",\n                                style: {\n                                    display: error == null ? \"none\" : \"block\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: error ? \"Please Fill Required Fields\" : \"Your message has been received, We will contact you soon.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                    lineNumber: 134,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn primary-btn\",\n                                    children: \"Send Message\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                    lineNumber: 141,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 140,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Contact, \"eC4TUMhM+0HN7p89ed5CamuCHDc=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxTQUFTQztnQ0FDMUJFLE9BQU9iOzs7Ozs7MENBRVQsOERBQUM2QztnQ0FDQ3BCLFdBQVU7Z0NBQ1ZtQixhQUFZO2dDQUNaRSxjQUFjO2dDQUNkL0MsTUFBSztnQ0FDTFcsVUFBVSxDQUFDQyxJQUFNRCxTQUFTQztnQ0FDMUJFLE9BQU9aOzs7Ozs7MENBRVQsOERBQUMwQjtnQ0FDQ0YsV0FBV2pCLFFBQVEsaUJBQWlCLGVBQWU7Z0NBQ25EdUMsT0FBTztvQ0FBRUMsU0FBU3hDLFNBQVMsSUFBSSxHQUFHLFNBQVMsT0FBTztnQ0FBQzswQ0FFbkQsNEVBQUN5Qzs4Q0FDRXpDLFFBQ0csZ0NBQ0EsMkRBQTJEOzs7Ozs7Ozs7OzswQ0FHbkUsOERBQUNtQjtnQ0FBSUYsV0FBVTswQ0FDYiw0RUFBQ3lCO29DQUFPekIsV0FBVTs4Q0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sRDtHQWhKTTlCO0tBQUFBO0FBaUpOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3QuanM/NWEyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW1haWxqcyBmcm9tIFwiZW1haWxqcy1jb21cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvbnRhY3QgPSAoe2luZm99KSA9PiB7XG4gIGNvbnN0IFttYWlsRGF0YSwgc2V0TWFpbERhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgbWVzc2FnZTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3Qge3NvY2lhbF9oYW5kbGVzfT0gaW5mby51c2VyXG5cbiAgIGNvbnN0IHR0PSBgaHR0cHM6Ly8ke3NvY2lhbF9oYW5kbGVzLnBsYXRmb3JtfS5jb20vYFxuXG4gIGNvbnNvbGUubG9nKGBodHRwczovLyR7c29jaWFsX2hhbmRsZXMucGxhdGZvcm19LmNvbS9gKTtcblxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBtZXNzYWdlIH0gPSBtYWlsRGF0YTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT5cbiAgICBzZXRNYWlsRGF0YSh7IC4uLm1haWxEYXRhLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChuYW1lLmxlbmd0aCA9PT0gMCB8fCBlbWFpbC5sZW5ndGggPT09IDAgfHwgbWVzc2FnZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgY2xlYXJFcnJvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWFpbGpzXG4gICAgICAgIC5zZW5kKFxuICAgICAgICAgIFwic2VydmljZV9zZXJ1aHd1XCIsIC8vIHNlcnZpY2UgaWRcbiAgICAgICAgICBcInRlbXBsYXRlXzIxYXc1OHpcIiwgLy8gdGVtcGxhdGUgaWRcbiAgICAgICAgICBtYWlsRGF0YSxcbiAgICAgICAgICBcIlEzcGNjZExaaFUtbVpUN3RRXCIgLy8gcHVibGljIGFwaVxuICAgICAgICApXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgICAgICAgY2xlYXJFcnJvcigpO1xuICAgICAgICAgICAgc2V0TWFpbERhdGEoeyBuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgbWVzc2FnZTogXCJcIiB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci50ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjbGVhckVycm9yID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgfSwgMjAwMCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFjdC1zZWN0aW9uXCIgaWQ9XCJjb250YWN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mby1jb250XCI+XG4gICAgICAgICAgey8qIENvbnRhY3QgbGVmdCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX3RpdGxlIHdvdyBmYWRlSW5VcFwiPlxuICAgICAgICAgICAgICA8aDI+TGV0J3MgQ29ubmVjdDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcFwiPlxuICAgICAgICAgICAgICBQbGVhc2UgZmlsbCBvdXQgdGhlIGZvcm0gb24gdGhpcyBzZWN0aW9uIHRvIGNvbnRhY3Qgd2l0aCBtZS4gT3JcbiAgICAgICAgICAgICAgY2FsbCBiZXR3ZWVuIDk6MDAgYS5tLiBhbmQgODowMCBwLm0uIEVULCBNb25kYXkgdGhyb3VnaCBGcmlkYXlcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250YWN0LXNvY2lhbCB3b3cgZmFkZUluVXBcIj5cbiAgICAgICAgICAgICB7c29jaWFsX2hhbmRsZXMubWFwKChzb2NpYWwsaW5kZXgpPT4oPGxpPlxuICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPXtzb2NpYWwudXJsID8gc29jaWFsLnVybCA6IGBodHRwczovLyR7c29jaWFsLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCl9LmNvbWB9PiAqL31cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtzb2NpYWwudXJsID8gc29jaWFsLnVybCA6IGBodHRwczovLyR7c29jaWFsLnBsYXRmb3JtfS5jb21gfT5cblxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhYiBmYS0ke3NvY2lhbC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpfWB9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPikpIFxuXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7LyogPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhYiBmYS1pbnN0YWdyYW0nIC8+XG5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhYiBmYS0ke3NvY2lhbF9oYW5kbGVzWzFdLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCl9YH0gLz5cblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZHJpYmJibGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT4gICovfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogQ29udGFjdCByaWdodCAqL31cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtIHdvdyBmYWRlSW5VcFwiXG4gICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0KGUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5MZXQncyBtZXNzYWdlIG1lIGFuZCBtYWNrIHNvbWV0aGluZyB0b2dldGhlcjwvaDM+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtY29udHJvbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtY29udHJvbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XCJcIn1cbiAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3IgPyBcImVtcHR5X25vdGljZVwiIDogXCJyZXR1cm5tZXNzYWdlXCJ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGVycm9yID09IG51bGwgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7ZXJyb3JcbiAgICAgICAgICAgICAgICAgID8gXCJQbGVhc2UgRmlsbCBSZXF1aXJlZCBGaWVsZHNcIlxuICAgICAgICAgICAgICAgICAgOiBcIllvdXIgbWVzc2FnZSBoYXMgYmVlbiByZWNlaXZlZCwgV2Ugd2lsbCBjb250YWN0IHlvdSBzb29uLlwifVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1idG5cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gcHJpbWFyeS1idG5cIj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiJdLCJuYW1lcyI6WyJlbWFpbGpzIiwidXNlU3RhdGUiLCJDb250YWN0IiwiaW5mbyIsIm1haWxEYXRhIiwic2V0TWFpbERhdGEiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwic29jaWFsX2hhbmRsZXMiLCJ1c2VyIiwidHQiLCJwbGF0Zm9ybSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInNldEVycm9yIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiY2xlYXJFcnJvciIsInNlbmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnIiLCJ0ZXh0Iiwic2V0VGltZW91dCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImRpdiIsImgyIiwicCIsInVsIiwibWFwIiwic29jaWFsIiwiaW5kZXgiLCJsaSIsImEiLCJocmVmIiwidXJsIiwiaSIsInRvTG93ZXJDYXNlIiwiZm9ybSIsImgzIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsImRlZmF1bHRWYWx1ZSIsInN0eWxlIiwiZGlzcGxheSIsInNwYW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Contact.js\n"));

/***/ })

});