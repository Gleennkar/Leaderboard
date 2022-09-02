"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["index"],{

/***/ "./src/Modules/score.js":
/*!******************************!*\
  !*** ./src/Modules/score.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// const { v4: uuidv4 } = require('uuid');

// export default class PIECE {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//     this.id = uuidv4();
//   }
// }
// 'Game with ID: GrlP35gyONINxwNnhDtc added.'}

async function userScores (a, b) {
    const BaseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GrlP35gyONINxwNnhDtc/scores'
    fetch (BaseUrl, {
        method: 'POST',
        body: JSON.stringify({
           user: a,
           score: b,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json()
    ).then((data) => console.log(data)
    )
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userScores);

/***/ }),

/***/ "./src/Modules/store.js":
/*!******************************!*\
  !*** ./src/Modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function games() {
    const BaseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GrlP35gyONINxwNnhDtc/scores';
    const list = await fetch (BaseUrl);
    const scorelist = await list.json();
    const scores = document.querySelector('.scores');
  for (let i = 0; i < scorelist.result.length; i+=1) {
      scores.innerHTML += `<li class="scoreboard"> ${scorelist.result[i].user} : ${scorelist.result[i].score} </li>`
  }
  
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (games); 

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modules_score_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/score.js */ "./src/Modules/score.js");
/* harmony import */ var _Modules_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/store.js */ "./src/Modules/store.js");
// import './style.css';




const btn = document.querySelector('.btn')
const name = document.querySelector('#name')
const score = document.querySelector('#score')
const submit = document.querySelector('#submit')
  

 function list(i) {
    i.preventDefault()
       const play = name.value
       const playScore = score.value

       ;(0,_Modules_score_js__WEBPACK_IMPORTED_MODULE_0__["default"])(play, playScore);
       name.value = '';
       score.value = '';

 }
  
 submit.addEventListener('click', list)
 btn.addEventListener('click', _Modules_store_js__WEBPACK_IMPORTED_MODULE_1__["default"] )





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsV0FBVyxhQUFhOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0NBQStDO0FBQy9DLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQzNCZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZCQUE2QjtBQUMvQyxxREFBcUQsMEJBQTBCLElBQUksMkJBQTJCO0FBQzlHO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7O0FDWHBCO0FBQ3lDO0FBQ0g7OztBQUd0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sOERBQVE7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix5REFBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL01vZHVsZXMvc2NvcmUuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvTW9kdWxlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB7IHY0OiB1dWlkdjQgfSA9IHJlcXVpcmUoJ3V1aWQnKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUElFQ0Uge1xuLy8gICBjb25zdHJ1Y3RvcihuYW1lLCBzY29yZSkge1xuLy8gICAgIHRoaXMubmFtZSA9IG5hbWU7XG4vLyAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuLy8gICAgIHRoaXMuaWQgPSB1dWlkdjQoKTtcbi8vICAgfVxuLy8gfVxuLy8gJ0dhbWUgd2l0aCBJRDogR3JsUDM1Z3lPTklOeHdObmhEdGMgYWRkZWQuJ31cblxuYXN5bmMgZnVuY3Rpb24gdXNlclNjb3JlcyAoYSwgYikge1xuICAgIGNvbnN0IEJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvR3JsUDM1Z3lPTklOeHdObmhEdGMvc2NvcmVzJ1xuICAgIGZldGNoIChCYXNlVXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgIHVzZXI6IGEsXG4gICAgICAgICAgIHNjb3JlOiBiLFxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgfSxcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpXG4gICAgKS50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKVxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJTY29yZXMiLCJhc3luYyBmdW5jdGlvbiBnYW1lcygpIHtcbiAgICBjb25zdCBCYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzL0dybFAzNWd5T05JTnh3Tm5oRHRjL3Njb3Jlcyc7XG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IGZldGNoIChCYXNlVXJsKTtcbiAgICBjb25zdCBzY29yZWxpc3QgPSBhd2FpdCBsaXN0Lmpzb24oKTtcbiAgICBjb25zdCBzY29yZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVzJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2NvcmVsaXN0LnJlc3VsdC5sZW5ndGg7IGkrPTEpIHtcbiAgICAgIHNjb3Jlcy5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cInNjb3JlYm9hcmRcIj4gJHtzY29yZWxpc3QucmVzdWx0W2ldLnVzZXJ9IDogJHtzY29yZWxpc3QucmVzdWx0W2ldLnNjb3JlfSA8L2xpPmBcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZXMgIiwiLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2FtZWxpc3QgZnJvbSAnLi9Nb2R1bGVzL3Njb3JlLmpzJ1xuaW1wb3J0IGdhbWVzIGZyb20gJy4vTW9kdWxlcy9zdG9yZS5qcydcblxuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJylcbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpXG5jb25zdCBzY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0JylcbiAgXG5cbiBmdW5jdGlvbiBsaXN0KGkpIHtcbiAgICBpLnByZXZlbnREZWZhdWx0KClcbiAgICAgICBjb25zdCBwbGF5ID0gbmFtZS52YWx1ZVxuICAgICAgIGNvbnN0IHBsYXlTY29yZSA9IHNjb3JlLnZhbHVlXG5cbiAgICAgICBnYW1lbGlzdChwbGF5LCBwbGF5U2NvcmUpO1xuICAgICAgIG5hbWUudmFsdWUgPSAnJztcbiAgICAgICBzY29yZS52YWx1ZSA9ICcnO1xuXG4gfVxuICBcbiBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0KVxuIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWVzIClcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==