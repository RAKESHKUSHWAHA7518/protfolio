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

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Project = (param)=>{\n    let { info  } = param;\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // console.log(info.user.projects[0].title);\n    const { projects  } = info.user;\n    const constant = \"This approach ensures that even if a project description is missing, the paragraph element won't be empty and provides informative feedback to the user\";\n    const ProjectCard = (param)=>{\n        let { project  } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md:mx-auto sm:mx-20 my-5 p-4 justify-center items-center transform transition-all duration-300 hover:scale-105 group rounded-md hover:bg-gray-400 shadow-md bg-white border border-gray-200 hover:font-bold \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative overflow-hidden rounded-md \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"h-45 w-full object-cover rounded-t-md\",\n                        src: project.image.url,\n                        alt: project.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-bold text-lg text-blue-900\",\n                    children: project.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                    lineNumber: 34,\n                    columnNumber: 10\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: \"text-sm text-gray-900\",\n                    children: [\n                        \"TechStack: \",\n                        project.techStack.join(\" , \")\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"p-2 text-sm text-gray-700\",\n                    children: project.description ? project.description : constant\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                    lineNumber: 37,\n                    columnNumber: 10\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between py-2 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: project.githuburl ? project.githuburl : \"https://github.com\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            class: \"bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    class: \"h-5 w-5 mr-2\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    stroke: \"currentColor\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        \"stroke-width\": \"2\",\n                                        d: \"M4 9H2v10h2m2-10h10a2 2 0 012 2v10a2 2 0 01-2 2H8l-4 4V5a2 2 0 012-2z\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 5\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 3\n                                }, undefined),\n                                \"GitHub\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: project.liveurl ? project.liveurl : \"https://google.com\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            class: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    class: \"h-5 w-5 mr-2\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    stroke: \"currentColor\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        \"stroke-width\": \"2\",\n                                        d: \"M12 6v6m0 0v6m0-6h6m-6 0H6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 5\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 3\n                                }, undefined),\n                                \"Live\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                            lineNumber: 44,\n                            columnNumber: 3\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n            lineNumber: 27,\n            columnNumber: 8\n        }, undefined);\n    };\n    //  console.log(image);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center text-5xl font-bold py-10\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8\",\n                    children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCard, {\n                            project: project\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n                    lineNumber: 63,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\rk751\\\\Downloads\\\\doras\\\\dora\\\\src\\\\components\\\\Project.js\",\n            lineNumber: 59,\n            columnNumber: 1\n        }, undefined)\n    }, void 0, false);\n};\n_s(Project, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkI7QUFFUTtBQU1qQyxNQUFNRSxVQUFVLFNBQVk7UUFBWCxFQUFDQyxLQUFJLEVBQUM7O0lBRXJCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXBELDRDQUE0QztJQUUzQyxNQUFNLEVBQUNLLFNBQVEsRUFBRSxHQUFFSCxLQUFLSSxJQUFJO0lBTTdCLE1BQU1DLFdBQVU7SUFFaEIsTUFBTUMsY0FBYyxTQUFpQjtZQUFoQixFQUFFQyxRQUFPLEVBQUU7UUFDNUIscUJBR0csOERBQUNDO1lBQUlDLFdBQVU7OzhCQUNsQiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1QsNEVBQUNDO3dCQUFJRCxXQUFVO3dCQUF3Q0UsS0FBS0osUUFBUUssS0FBSyxDQUFDQyxHQUFHO3dCQUFFQyxLQUFLUCxRQUFRUSxLQUFLOzs7Ozs7Ozs7Ozs4QkFLbEcsOERBQUNDO29CQUFHUCxXQUFVOzhCQUFvQ0YsUUFBUVEsS0FBSzs7Ozs7OzhCQUM1RCw4REFBQ0U7b0JBQUdSLFdBQVU7O3dCQUF3Qjt3QkFBWUYsUUFBUVcsU0FBUyxDQUFDQyxJQUFJLENBQUM7Ozs7Ozs7OEJBRTVFLDhEQUFDQztvQkFBRVgsV0FBVTs4QkFBOEJGLFFBQVFjLFdBQVcsR0FBR2QsUUFBUWMsV0FBVyxHQUFHaEIsUUFBUTs7Ozs7OzhCQUM5Riw4REFBQ0c7b0JBQUlDLFdBQVU7O3NDQUNqQiw4REFBQ2E7NEJBQUVDLE1BQVFoQixRQUFRaUIsU0FBUyxHQUFHakIsUUFBUWlCLFNBQVMsR0FBRyxvQkFBb0I7NEJBQUNDLFFBQU87NEJBQVNDLEtBQUk7NEJBQXNCQyxPQUFNOzs4Q0FDOUgsOERBQUNDO29DQUFJRCxPQUFNO29DQUFlRSxNQUFLO29DQUFPQyxTQUFRO29DQUFZQyxRQUFPOzhDQUMvRCw0RUFBQ0M7d0NBQUtDLGtCQUFlO3dDQUFRQyxtQkFBZ0I7d0NBQVFDLGdCQUFhO3dDQUFJQyxHQUFFOzs7Ozs7Ozs7OztnQ0FDcEU7Ozs7Ozs7c0NBRU4sOERBQUNkOzRCQUFHQyxNQUFNaEIsUUFBUThCLE9BQU8sR0FBRzlCLFFBQVE4QixPQUFPLEdBQUcsb0JBQW9COzRCQUFFWixRQUFPOzRCQUFTQyxLQUFJOzRCQUFzQkMsT0FBTTs7OENBQ3BILDhEQUFDQztvQ0FBSUQsT0FBTTtvQ0FBZUUsTUFBSztvQ0FBT0MsU0FBUTtvQ0FBWUMsUUFBTzs4Q0FDL0QsNEVBQUNDO3dDQUFLQyxrQkFBZTt3Q0FBUUMsbUJBQWdCO3dDQUFRQyxnQkFBYTt3Q0FBSUMsR0FBRTs7Ozs7Ozs7Ozs7Z0NBQ25FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU47SUFHSCx1QkFBdUI7SUFFbkIscUJBQ0k7a0JBRVIsNEVBQUM1Qjs7OEJBQ0ssOERBQUNBOzhCQUNDLDRFQUFDUTt3QkFBR1AsV0FBVTtrQ0FBdUM7Ozs7Ozs7Ozs7OzhCQUV2RCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pOLFNBQVNtQyxHQUFHLENBQUMsQ0FBQy9CLFNBQVNnQyxzQkFDdEIsOERBQUNqQzs0QkFBd0JDLFNBQVNBOzJCQUFoQmdDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QjtHQWpFUXhDO0tBQUFBO0FBc0VOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3QuanM/NWY0MCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbiAgaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG4gIGNvbnN0IFByb2plY3QgPSAoe2luZm99KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGluZm8udXNlci5wcm9qZWN0c1swXS50aXRsZSk7XHJcblxyXG4gY29uc3Qge3Byb2plY3RzIH09IGluZm8udXNlcjtcclxuXHJcblxyXG4gXHJcblxyXG5cclxuY29uc3QgY29uc3RhbnQ9IFwiVGhpcyBhcHByb2FjaCBlbnN1cmVzIHRoYXQgZXZlbiBpZiBhIHByb2plY3QgZGVzY3JpcHRpb24gaXMgbWlzc2luZywgdGhlIHBhcmFncmFwaCBlbGVtZW50IHdvbid0IGJlIGVtcHR5IGFuZCBwcm92aWRlcyBpbmZvcm1hdGl2ZSBmZWVkYmFjayB0byB0aGUgdXNlclwiXHJcblxyXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7IHByb2plY3QgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICBcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bXgtYXV0byBzbTpteC0yMCBteS01IHAtNCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3ZlcjpzY2FsZS0xMDUgZ3JvdXAgcm91bmRlZC1tZCBob3ZlcjpiZy1ncmF5LTQwMCBzaGFkb3ctbWQgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBob3Zlcjpmb250LWJvbGQgICBcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgIFwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTQ1IHctZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZC10LW1kXCIgc3JjPXtwcm9qZWN0LmltYWdlLnVybH0gYWx0PXtwcm9qZWN0LnRpdGxlfSAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgIDwvZGl2ID5cclxuICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgcC00IGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjayB0by10cmFuc3BhcmVudFwiPiAqL31cclxuICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnICB0ZXh0LWJsdWUtOTAwXCI+e3Byb2plY3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlRlY2hTdGFjazoge3Byb2plY3QudGVjaFN0YWNrLmpvaW4oXCIgLCBcIil9PC9oNT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTIgIHRleHQtc20gdGV4dC1ncmF5LTcwMFwiPntwcm9qZWN0LmRlc2NyaXB0aW9uID8gcHJvamVjdC5kZXNjcmlwdGlvbiA6IGNvbnN0YW50fTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBweS0yICc+XHJcbiAgICAgICAgPGEgaHJlZj0gIHtwcm9qZWN0LmdpdGh1YnVybCA/IHByb2plY3QuZ2l0aHVidXJsIDogXCJodHRwczovL2dpdGh1Yi5jb21cIn10YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3M9XCJiZy1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICA8c3ZnIGNsYXNzPVwiaC01IHctNSBtci0yXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk00IDlIMnYxMGgybTItMTBoMTBhMiAyIDAgMDEyIDJ2MTBhMiAyIDAgMDEtMiAySDhsLTQgNFY1YTIgMiAwIDAxMi0yelwiPjwvcGF0aD5cclxuICA8L3N2Zz5HaXRIdWI8L2E+XHJcbiBcclxuICA8YSAgaHJlZj17cHJvamVjdC5saXZldXJsID8gcHJvamVjdC5saXZldXJsIDogXCJodHRwczovL2dvb2dsZS5jb21cIn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgPHN2ZyBjbGFzcz1cImgtNSB3LTUgbXItMlwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMTIgNnY2bTAgMHY2bTAtNmg2bS02IDBINlwiPjwvcGF0aD5cclxuICAgPC9zdmc+TGl2ZTwvYT5cclxuPC9kaXY+IFxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxuICAgfTtcclxuICBcclxuICAgIFxyXG4vLyAgY29uc29sZS5sb2coaW1hZ2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbjxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNXhsIGZvbnQtYm9sZCBweS0xMFwiPlByb2plY3RzPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNiBweC04XCI+XHJcbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxQcm9qZWN0Q2FyZCBrZXk9e2luZGV4fSBwcm9qZWN0PXtwcm9qZWN0fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbiAgXHJcblxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFByb2plY3QgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9qZWN0IiwiaW5mbyIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsInByb2plY3RzIiwidXNlciIsImNvbnN0YW50IiwiUHJvamVjdENhcmQiLCJwcm9qZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJhbHQiLCJ0aXRsZSIsImgxIiwiaDUiLCJ0ZWNoU3RhY2siLCJqb2luIiwicCIsImRlc2NyaXB0aW9uIiwiYSIsImhyZWYiLCJnaXRodWJ1cmwiLCJ0YXJnZXQiLCJyZWwiLCJjbGFzcyIsInN2ZyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwic3Ryb2tlLXdpZHRoIiwiZCIsImxpdmV1cmwiLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Project.js\n"));

/***/ })

});