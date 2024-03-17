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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Contact = (param)=>{\n    let { info  } = param;\n    _s();\n    const [mailData, setMailData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        email: \"\",\n        message: \"\"\n    });\n    const { social_handles  } = info.user;\n    const tt = social_handles[0].platform;\n    console.log(\"https://\".concat(tt, \".com/\"));\n    // console.log(`https://${social_handles.platform}.com/`);\n    const { name , email , message  } = mailData;\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const onChange = (e)=>setMailData({\n            ...mailData,\n            [e.target.name]: e.target.value\n        });\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        if (name.length === 0 || email.length === 0 || message.length === 0) {\n            setError(true);\n            clearError();\n        } else {\n            emailjs_com__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(\"service_seruhwu\", \"template_21aw58z\", mailData, \"Q3pccdLZhU-mZT7tQ\" // public api\n            ).then((response)=>{\n                setError(false);\n                clearError();\n                setMailData({\n                    name: \"\",\n                    email: \"\",\n                    message: \"\"\n                });\n            }, (err)=>{\n                console.log(err.text);\n            });\n        }\n    };\n    const clearError = ()=>{\n        setTimeout(()=>{\n            setError(null);\n        }, 2000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"contact-section\",\n        id: \"contact\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"contact-info-cont\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"contact-info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"section_title wow fadeInUp\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Let's Connect\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"wow fadeInUp\",\n                                children: \"Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"contact-social wow fadeInUp\",\n                                children: social_handles.map((social, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: social.url ? social.url : \"https://google.com\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fab fa-\".concat(social.platform.toLowerCase())\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                \" Rakesh\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 51\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"contact-form wow fadeInUp\",\n                        onSubmit: (e)=>onSubmit(e),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Let's message me and mack something together\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"input-control\",\n                                placeholder: \"Your Name\",\n                                name: \"name\",\n                                onChange: (e)=>onChange(e),\n                                value: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"input-control\",\n                                placeholder: \"Your Email\",\n                                name: \"email\",\n                                onChange: (e)=>onChange(e),\n                                value: email\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"input-control\",\n                                placeholder: \"Message\",\n                                defaultValue: \"\",\n                                name: \"message\",\n                                onChange: (e)=>onChange(e),\n                                value: message\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: error ? \"empty_notice\" : \"returnmessage\",\n                                style: {\n                                    display: error == null ? \"none\" : \"block\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: error ? \"Please Fill Required Fields\" : \"Your message has been received, We will contact you soon.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn primary-btn\",\n                                    children: \"Send Message\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                    lineNumber: 143,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                                lineNumber: 142,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Contact.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Contact, \"eC4TUMhM+0HN7p89ed5CamuCHDc=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzBDQUVULDhEQUFDNkM7Z0NBQ0NwQixXQUFVO2dDQUNWbUIsYUFBWTtnQ0FDWkUsY0FBYztnQ0FDZC9DLE1BQUs7Z0NBQ0xXLFVBQVUsQ0FBQ0MsSUFBTUQsU0FBU0M7Z0NBQzFCRSxPQUFPWjs7Ozs7OzBDQUVULDhEQUFDMEI7Z0NBQ0NGLFdBQVdqQixRQUFRLGlCQUFpQixlQUFlO2dDQUNuRHVDLE9BQU87b0NBQUVDLFNBQVN4QyxTQUFTLElBQUksR0FBRyxTQUFTLE9BQU87Z0NBQUM7MENBRW5ELDRFQUFDeUM7OENBQ0V6QyxRQUNHLGdDQUNBLDJEQUEyRDs7Ozs7Ozs7Ozs7MENBR25FLDhEQUFDbUI7Z0NBQUlGLFdBQVU7MENBQ2IsNEVBQUN5QjtvQ0FBT3pCLFdBQVU7OENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEQ7R0FsSk05QjtLQUFBQTtBQW1KTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250YWN0LmpzPzVhMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVtYWlsanMgZnJvbSBcImVtYWlsanMtY29tXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb250YWN0ID0gKHtpbmZvfSkgPT4ge1xuICBjb25zdCBbbWFpbERhdGEsIHNldE1haWxEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIG1lc3NhZ2U6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHtzb2NpYWxfaGFuZGxlc309IGluZm8udXNlclxuXG4gICBjb25zdCB0dD0gc29jaWFsX2hhbmRsZXNbMF0ucGxhdGZvcm1cbiAgIGNvbnNvbGUubG9nKGBodHRwczovLyR7dHR9LmNvbS9gKTtcblxuXG4gIC8vIGNvbnNvbGUubG9nKGBodHRwczovLyR7c29jaWFsX2hhbmRsZXMucGxhdGZvcm19LmNvbS9gKTtcblxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBtZXNzYWdlIH0gPSBtYWlsRGF0YTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT5cbiAgICBzZXRNYWlsRGF0YSh7IC4uLm1haWxEYXRhLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChuYW1lLmxlbmd0aCA9PT0gMCB8fCBlbWFpbC5sZW5ndGggPT09IDAgfHwgbWVzc2FnZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgY2xlYXJFcnJvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWFpbGpzXG4gICAgICAgIC5zZW5kKFxuICAgICAgICAgIFwic2VydmljZV9zZXJ1aHd1XCIsIC8vIHNlcnZpY2UgaWRcbiAgICAgICAgICBcInRlbXBsYXRlXzIxYXc1OHpcIiwgLy8gdGVtcGxhdGUgaWRcbiAgICAgICAgICBtYWlsRGF0YSxcbiAgICAgICAgICBcIlEzcGNjZExaaFUtbVpUN3RRXCIgLy8gcHVibGljIGFwaVxuICAgICAgICApXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgICAgICAgY2xlYXJFcnJvcigpO1xuICAgICAgICAgICAgc2V0TWFpbERhdGEoeyBuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgbWVzc2FnZTogXCJcIiB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci50ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjbGVhckVycm9yID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgfSwgMjAwMCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFjdC1zZWN0aW9uXCIgaWQ9XCJjb250YWN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mby1jb250XCI+XG4gICAgICAgICAgey8qIENvbnRhY3QgbGVmdCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX3RpdGxlIHdvdyBmYWRlSW5VcFwiPlxuICAgICAgICAgICAgICA8aDI+TGV0J3MgQ29ubmVjdDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcFwiPlxuICAgICAgICAgICAgICBQbGVhc2UgZmlsbCBvdXQgdGhlIGZvcm0gb24gdGhpcyBzZWN0aW9uIHRvIGNvbnRhY3Qgd2l0aCBtZS4gT3JcbiAgICAgICAgICAgICAgY2FsbCBiZXR3ZWVuIDk6MDAgYS5tLiBhbmQgODowMCBwLm0uIEVULCBNb25kYXkgdGhyb3VnaCBGcmlkYXlcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250YWN0LXNvY2lhbCB3b3cgZmFkZUluVXBcIj5cbiAgICAgICAgICAgICB7c29jaWFsX2hhbmRsZXMubWFwKChzb2NpYWwsaW5kZXgpPT4oPGxpPlxuICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPXtzb2NpYWwudXJsID8gc29jaWFsLnVybCA6IGBodHRwczovLyR7c29jaWFsLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCl9LmNvbWB9PiAqL31cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtzb2NpYWwudXJsID8gc29jaWFsLnVybCA6IGBodHRwczovL2dvb2dsZS5jb21gfT5cblxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhYiBmYS0ke3NvY2lhbC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpfWB9IC8+IFJha2VzaFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT4pKSBcblxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgey8qIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtaW5zdGFncmFtJyAvPlxuXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiIC8+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYWIgZmEtJHtzb2NpYWxfaGFuZGxlc1sxXS5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpfWB9IC8+XG5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWRyaWJiYmxlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+ICAqL31cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIENvbnRhY3QgcmlnaHQgKi99XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybSB3b3cgZmFkZUluVXBcIlxuICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+TGV0J3MgbWVzc2FnZSBtZSBhbmQgbWFjayBzb21ldGhpbmcgdG9nZXRoZXI8L2gzPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiXCJ9XG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9yID8gXCJlbXB0eV9ub3RpY2VcIiA6IFwicmV0dXJubWVzc2FnZVwifVxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBlcnJvciA9PSBudWxsID8gXCJub25lXCIgOiBcImJsb2NrXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge2Vycm9yXG4gICAgICAgICAgICAgICAgICA/IFwiUGxlYXNlIEZpbGwgUmVxdWlyZWQgRmllbGRzXCJcbiAgICAgICAgICAgICAgICAgIDogXCJZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gcmVjZWl2ZWQsIFdlIHdpbGwgY29udGFjdCB5b3Ugc29vbi5cIn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYnRuXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHByaW1hcnktYnRuXCI+U2VuZCBNZXNzYWdlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXSwibmFtZXMiOlsiZW1haWxqcyIsInVzZVN0YXRlIiwiQ29udGFjdCIsImluZm8iLCJtYWlsRGF0YSIsInNldE1haWxEYXRhIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsInNvY2lhbF9oYW5kbGVzIiwidXNlciIsInR0IiwicGxhdGZvcm0iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsImNsZWFyRXJyb3IiLCJzZW5kIiwidGhlbiIsInJlc3BvbnNlIiwiZXJyIiwidGV4dCIsInNldFRpbWVvdXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJoMiIsInAiLCJ1bCIsIm1hcCIsInNvY2lhbCIsImluZGV4IiwibGkiLCJhIiwiaHJlZiIsInVybCIsImkiLCJ0b0xvd2VyQ2FzZSIsImZvcm0iLCJoMyIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJkZWZhdWx0VmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Contact.js\n"));

/***/ })

});