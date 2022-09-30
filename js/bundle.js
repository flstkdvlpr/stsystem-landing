/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/char.js":
/*!****************************!*\
  !*** ./js/modules/char.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function char(){

    const card = document.querySelectorAll('.card-1');
    card.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == 'speclink'){
                item.childNodes[3].classList.remove('hide');
                item.childNodes[1].classList.add('hide');

            }
        });
    }); 

    card.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == 'specendlink'){
                item.childNodes[1].classList.remove('hide');
                item.childNodes[3].classList.add('hide');
            }
        });
    });

    function hideAll(){
        card.forEach(item => {
            item.classList.add('animate__animated', 'animate__bounce');
            item.closest(".col").style.display = 'none';
        });
    }

    function showAll(){
        card.forEach(item => {
            item.closest(".col").style.display = 'block';
        });
    }

    const housePc = document.querySelector('.house-pc'),
        houseMob = document.querySelector('.house-mobile');


    function showActiveItem(...datavalue){
        datavalue.forEach(item =>{
            document.querySelector(item).closest(".col").style.display = 'block';
        });
    }
    
    

    housePc.addEventListener('click', (e)=>{
        if(e.target && (e.target.closest(".grid-elem-2") || e.target.closest(".grid-elem-6"))){
            hideAll();
            showActiveItem('#data-os', '#data-km', '#data-gl');
        }
        if(e.target && e.target.closest(".grid-elem-3")){
            hideAll();
            showActiveItem('#data-rf','#data-gl');
        }
    
        if(e.target && (e.target.closest(".grid-elem-4") || e.target.closest(".grid-elem-7-2") )){
            hideAll();
            showActiveItem('#data-km', '#data-os', '#data-wl', '#data-gl');
        }
        
        if(e.target && (e.target.closest(".grid-elem-9") || e.target.closest(".grid-elem-7-1") )){
            showAll();
            hideAll();
            showActiveItem('#data-fn', '#data-ge', '#data-gl');
        }
        
    
        if(e.target && e.target.closest(".grid-elem-10")){
            showAll();
            hideAll();
            document.querySelector('#data-eko').closest(".col").style.display = 'block';
        }
    
        
        
    });

        houseMob.addEventListener('click', (e)=>{
            if(e.target && (e.target.closest(".grid-elem-2") || e.target.closest(".grid-elem-6"))){
                hideAll();
                showActiveItem('#data-km', '#data-os', '#data-gl');
            }
            if(e.target && e.target.closest(".grid-elem-3")){
                showAll();
                hideAll();
                showActiveItem('#data-rf','#data-gl');
            }
        
            if(e.target && (e.target.closest(".grid-elem-4") || e.target.closest(".grid-elem-7-2") )){
                showAll();
                hideAll();
                showActiveItem('#data-km','#data-os', '#data-wl', '#data-gl');
            }
            
            if(e.target && (e.target.closest(".grid-elem-9") || e.target.closest(".grid-elem-7-1") )){
                showAll();
                hideAll();
                showActiveItem('#data-fn','#data-ge', '#data-gl');
            }
        
            if(e.target && e.target.closest(".grid-elem-10")){
                showAll();
                hideAll();
                document.querySelector('#data-eko').closest(".col").style.display = 'block';
            } 
        });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (char);

/***/ }),

/***/ "./js/modules/fetches.js":
/*!*******************************!*\
  !*** ./js/modules/fetches.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function fetches(){
    try{
    fetch('http://localhost:3000/offerss')
    .then(data => data.json())
    .then(res => console.log(res));
    } catch(error){
        console.log("fetch ругается");
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetches);

/***/ }),

/***/ "./js/modules/hamburger.js":
/*!*********************************!*\
  !*** ./js/modules/hamburger.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function hamburger(){
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', ()=>{
        menu.classList.toggle('menu_active');
        hamburger.classList.toggle('hamburger_active');
    });

    menuItem.forEach(item =>{
        item.addEventListener('click', ()=>{
            menu.classList.toggle('menu_active');
            hamburger.classList.toggle('hamburger_active');
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);

/***/ })

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_char__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/char */ "./js/modules/char.js");
/* harmony import */ var _modules_fetches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fetches */ "./js/modules/fetches.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hamburger */ "./js/modules/hamburger.js");





window.addEventListener('DOMContentLoaded', ()=>{
      (0,_modules_char__WEBPACK_IMPORTED_MODULE_0__["default"])();
      (0,_modules_fetches__WEBPACK_IMPORTED_MODULE_1__["default"])();
      (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map