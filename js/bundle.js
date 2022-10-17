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

    const card = document.querySelectorAll('.card-1'),
          hcatalog = document.querySelector('.hcatalog');

    card.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == 'speclink'){
                item.childNodes[3].classList.remove('hide');
                item.childNodes[1].classList.add('hide');
                item.classList.add('animate__animated', 'animate__flipInY');

            }
        });
    }); 

    card.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == 'specendlink'){
                item.childNodes[1].classList.remove('hide');
                item.childNodes[3].classList.add('hide');
                item.classList.add('animate__animated', 'animate__flipInY');
                card.forEach(item =>{
                    item.classList.remove('animate__animated', 'animate__flipInY');
                })
            }
        });
    });

    const removeAnimation = () =>{
        card.forEach(item => {
            item.classList.remove('animate__animated', 'animate__zoomIn');
        });
    }


    function hideAll(){
        card.forEach(item => {
            item.classList.add('animate__animated', 'animate__zoomIn');
            item.closest(".col").style.display = 'none';
            setTimeout(removeAnimation, 1000);
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
        if(e.target && (e.target.closest(".grid-elem-2"))){
            hideAll();
            showActiveItem('#data-os', '#data-km', '#data-gl');
            hcatalog.innerHTML = "<a name='catalog'>Утеплитель для скатной кровли</a>";
        }

        if(e.target && (e.target.closest(".grid-elem-6"))){
            hideAll();
            showActiveItem('#data-os', '#data-km', '#data-gl');
            hcatalog.innerHTML = "<a name='catalog'>Утеплитель для пола</a>";
        }

        if(e.target && e.target.closest(".grid-elem-3")){
            hideAll();
            showActiveItem('#data-rf','#data-gl');
            hcatalog.innerHTML = "<a name='catalog'>Утеплитель для плоской кровли</a>";
        }
    
        if(e.target && (e.target.closest(".grid-elem-4") )){
            hideAll();
            showActiveItem('#data-km', '#data-os', '#data-wl', '#data-gl');
            hcatalog.innerHTML = "<a name='catalog'>Утеплитель для лоджий и балконов</a>";
        }

        if(e.target && (e.target.closest(".grid-elem-7-2") )){
            hideAll();
            showActiveItem('#data-km', '#data-os', '#data-wl', '#data-gl');
            hcatalog.innerHTML = "<a name='catalog'>Утеплитель для стен</a>";
        }
        
        if(e.target && (e.target.closest(".grid-elem-9") || e.target.closest(".grid-elem-7-1") )){
            showAll();
            hideAll();
            showActiveItem('#data-fn', '#data-ge', '#data-gl');
            hcatalog.innerHTML = "<a name='catalog'>Утеплитель цоколей и фундамента</a>";
        }
        
    
        if(e.target && e.target.closest(".grid-elem-10")){
            showAll();
            hideAll();
            document.querySelector('#data-eko').closest(".col").style.display = 'block';
            hcatalog.innerHTML = "<a name='catalog'>Утеплитель для труб</a>";
        }
    
        
    });

        houseMob.addEventListener('click', (e)=>{
            if(e.target && e.target.closest(".grid-elem-1")){
                showAll();
                hideAll();
                showActiveItem('#data-km', '#data-os', '#data-wl', '#data-gl');
                hcatalog.innerHTML = "<a name='catalog'>Утеплитель для лоджий и балконов</a>";

            }
            if(e.target && (e.target.closest(".grid-elem-2"))){
                hideAll();
                showActiveItem('#data-os', '#data-km', '#data-gl');
                hcatalog.innerHTML = "<a name='catalog'>Утеплитель для скатной кровли</a>";
            }

            if(e.target && (e.target.closest(".grid-elem-3") )){
                hideAll();
                showActiveItem('#data-km', '#data-os', '#data-wl', '#data-gl');
                hcatalog.innerHTML = "<a name='catalog'>Утеплитель для стен</a>";
            }

            if(e.target && e.target.closest(".grid-elem-4")){
                hideAll();
                showActiveItem('#data-rf','#data-gl');
                hcatalog.innerHTML = "<a name='catalog'>Утеплитель для плоской кровли</a>";
            }

            if(e.target && e.target.closest(".grid-elem-5")){
                showAll();
                hideAll();
                document.querySelector('#data-eko').closest(".col").style.display = 'block';
                hcatalog.innerHTML = "<a name='catalog'>Утеплитель для труб</a>";
            }

            if(e.target && (e.target.closest(".grid-elem-6") || e.target.closest(".grid-elem-8") )){
                showAll();
                hideAll();
                showActiveItem('#data-fn', '#data-ge', '#data-gl');
                hcatalog.innerHTML = "<a name='catalog'>Утеплитель цоколей и фундамента</a>";
            }

            if(e.target && (e.target.closest(".grid-elem-7"))){
                hideAll();
                showActiveItem('#data-os', '#data-km', '#data-gl');
                hcatalog.innerHTML = "<a name='catalog'>Утеплитель для пола</a>";
            }
        
 
        });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (char);

/***/ }),

/***/ "./js/modules/checkCity.js":
/*!*********************************!*\
  !*** ./js/modules/checkCity.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cityCheck (){
    const telephoneField = document.querySelector('.header_tel'),
          select = document.querySelector('select'),
          headerTime = document.querySelector('.header_time');

    select.addEventListener('change', (e)=>{
        if(e.target.value == 1){
            telephoneField.innerHTML = '<a href="tel:+786326003320">+7 (863) 260-03-20</a>';
            headerTime.textContent = 'ул. Юго-восточная промзона, 12/4'
        } else if (e.target.value == 2){
            telephoneField.innerHTML = '<a href="tel:+78612900840">+7 (861) 290-08-40</a>';
            headerTime.textContent = 'ул. Тополиная, 36, офис 1'
        } else if (e.target.value == 3){
            telephoneField.innerHTML = '<a href="tel:+78652219088">+7 (865) 221-90-88</a>';
            headerTime.textContent = 'ул. Производственная, 11'
        } else if (e.target.value == 4){
            telephoneField.innerHTML = '<a href="tel:+73652887109">+7 (365) 288-71-09</a>';
            headerTime.textContent = 'ул. Трансформаторная, 6'
        }
    })
    
   

    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cityCheck);

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
    fetch('js/price.json')
    .then(data => data.json())
    .then(res => console.log(res));
    } catch(error){
        console.log("fetch ругается");
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetches);

/***/ }),

/***/ "./js/modules/fromrequest.js":
/*!***********************************!*\
  !*** ./js/modules/fromrequest.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function fromrequest(){
    const form = document.querySelectorAll('form');
    console.log(form);

    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fromrequest);

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

/***/ }),

/***/ "./js/modules/menuCatalogCancel.js":
/*!*****************************************!*\
  !*** ./js/modules/menuCatalogCancel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menuCatalogCancel(){
    const menu = document.querySelectorAll('.menu'),
          catalogName = document.querySelector('.hcatalog'),
          card = document.querySelectorAll('.card-1');
    menu.forEach(item =>{
        item.addEventListener('click', ()=>{
            (function showAllS(){
                card.forEach(item => {
                    item.closest(".col").style.display = 'block';
                    catalogName.innerHTML = "<a name='catalog'>Каталог</a>";
                });
            }())
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuCatalogCancel);

/***/ }),

/***/ "./js/modules/setcards.js":
/*!********************************!*\
  !*** ./js/modules/setcards.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setcards(){

    const setCards = document.querySelectorAll('.set_card');
    console.log(setCards[0].children[3]);

    function hideAllSets (){
        setCards.forEach(item =>{
            item.closest(".set-dachbords").style.display = 'none';
        })
    }

    function showAllSets (){
        setCards.forEach(item =>{
            item.closest(".set-dachbords").style.display = 'block';
        })
    }

    const actionForCards = function (classTag){
        document.querySelector(classTag).classList.remove('hide');
        document.querySelector(classTag).classList.add('animate__animated', 'animate__zoomIn');
    }

    setCards.forEach(item => {
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == "proof"){
                setCards.forEach(item =>{
                    item.classList.add('animate__animated', 'animate__zoomOut');
                    setTimeout(hideAllSets, 500);
                    actionForCards('.set-item-proof');
                })

                document.querySelector('.set-tittle').innerHTML = "<a name='catalog'>Каталог</a>";
            }
        })
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setcards);

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
/* harmony import */ var _modules_menuCatalogCancel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menuCatalogCancel */ "./js/modules/menuCatalogCancel.js");
/* harmony import */ var _modules_char__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/char */ "./js/modules/char.js");
/* harmony import */ var _modules_fetches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fetches */ "./js/modules/fetches.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hamburger */ "./js/modules/hamburger.js");
/* harmony import */ var _modules_checkCity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkCity */ "./js/modules/checkCity.js");
/* harmony import */ var _modules_setcards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/setcards */ "./js/modules/setcards.js");
/* harmony import */ var _modules_fromrequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/fromrequest */ "./js/modules/fromrequest.js");









window.addEventListener('DOMContentLoaded', ()=>{
      (0,_modules_menuCatalogCancel__WEBPACK_IMPORTED_MODULE_0__["default"])();
      (0,_modules_checkCity__WEBPACK_IMPORTED_MODULE_4__["default"])();
      (0,_modules_char__WEBPACK_IMPORTED_MODULE_1__["default"])();
      (0,_modules_fetches__WEBPACK_IMPORTED_MODULE_2__["default"])();
      (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_3__["default"])();
      (0,_modules_setcards__WEBPACK_IMPORTED_MODULE_5__["default"])();
      (0,_modules_fromrequest__WEBPACK_IMPORTED_MODULE_6__["default"])();
});
})();

/******/ })()
;