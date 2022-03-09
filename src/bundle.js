/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_6_6_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js */ \"https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_6_6_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js */ \"https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_9_6_6_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_6_6_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__]);\n([https_www_gstatic_com_firebasejs_9_6_6_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_6_6_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// import { myFunction } from './lib/index.js';\r\n\r\n// Import the functions you need from the SDKs you need\r\n\r\n\r\n// TODO: Add SDKs for Firebase products that you want to use\r\n// https://firebase.google.com/docs/web/setup#available-libraries\r\n\r\n// Your web app's Firebase configuration\r\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyAcC9x7vCU7X9Dc0b8mM2L4RNcL97800qs\",\r\n  authDomain: \"bookreads-9192a.firebaseapp.com\",\r\n  projectId: \"bookreads-9192a\",\r\n  storageBucket: \"bookreads-9192a.appspot.com\",\r\n  messagingSenderId: \"512279860959\",\r\n  appId: \"1:512279860959:web:75245200f515c09571fb6a\",\r\n  measurementId: \"G-3327QVYEY6\"\r\n};\r\n\r\n// First sign up and sign in btns\r\n\r\nconst btnSignUpLP = document.querySelector('#btn-signUp-LP');\r\nconst btnSignInLP = document.querySelector('#btn-signIn-LP');\r\nconst signUpContainer = document.querySelector('.createAccount-container');\r\nconst signInContainer = document.querySelector('.enterAccount-container');\r\nconst signUpInContainer= document.querySelector('.sign-up-in-container');\r\n\r\nbtnSignUpLP.addEventListener('click', () => {\r\n  signUpContainer.style.visibility = 'visible';\r\n  signUpInContainer.style.visibility = 'hidden';\r\n});\r\n\r\nbtnSignInLP.addEventListener('click', () => {\r\n  signInContainer.style.visibility = 'visible';\r\n  signUpInContainer.style.visibility = 'hidden';\r\n});\r\n\r\n\r\n\r\n// Init firebase app\r\nconst app = (0,https_www_gstatic_com_firebasejs_9_6_6_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,https_www_gstatic_com_firebasejs_9_6_6_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\n\r\n// sign up for users\r\nconst txtEmail = document.getElementById('txtEmail');\r\nconst txtPassword = document.getElementById('txtPassword');\r\n\r\nconst createAccount = async () => {\r\n    const email = txtEmail.value;\r\n    const password = txtPassword.value;\r\n  \r\n    try {\r\n      const userCredential = await (0,https_www_gstatic_com_firebasejs_9_6_6_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(auth, email, password);\r\n      console.log(userCredential.user);\r\n    } catch (error) {\r\n      console.log(error);\r\n    }\r\n  };\r\n  \r\n  const btnSignUp = document.getElementById('btn-signUp');\r\n  btnSignUp.addEventListener('click', createAccount);\r\n  \r\n// sign up with Facebook\r\n\r\nconst facebookBtn = document.querySelector('#facebookSignUp');\r\nconsole.log(facebookBtn)\r\nfacebookBtn.addEventListener('click', e => {\r\n  e.preventDefault();\r\n  const facebookProvider = new https_www_gstatic_com_firebasejs_9_6_6_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__.FacebookAuthProvider();\r\n  (0,https_www_gstatic_com_firebasejs_9_6_6_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(auth, facebookProvider)\r\n    .then((result) => {\r\n        console.log('facebook sign in')\r\n        const user = result.user;\r\n        console.log(user)\r\n    })\r\n    .catch(err => {\r\n      console.log(err)\r\n    })\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://social-network/./src/main.js?");

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js":
false,

/***/ "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js":
false

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => (err && reject(promise[webpackError] = err), outerResolve()));
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;