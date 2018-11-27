/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nvar xmlhttp = new XMLHttpRequest();\n\n\nxmlhttp.onload = function() {\n    if (this.readyState == 4 && this.status == 200) {\n        var myArr = JSON.parse(this.responseText);\n        myFunction(myArr);\n\n        let x= document.getElementsByClassName(\"removejtask\");\n         for (let i=0; i<x.length;i++){\n\n       x[i].addEventListener('click', function(){\n           x[i].parentElement.style.display=\"none\";       \n        });\n        \n    }\n\n    let y= document.getElementsByTagName('li');\n         for (let i=0; i<y.length;i++){\n\n       y[i].addEventListener('click', function(){\n           if(y[i].style.textDecoration == \"\"){\n            y[i].style.textDecoration=\"line-through\";\n           }\n           else if(y[i].style.textDecoration == \"line-through\"){\n            y[i].style.textDecoration=\"\";\n           }\n                  \n        });\n\n    }\n    }\n};\n\nxmlhttp.open(\"GET\", \"data.json\", true);\n\nxmlhttp.send();\n\nfunction myFunction(arr) {\n    \n    for(let i = 0; i < arr.length; i++) {\n       let title = arr[i].title ;\n       let todoitem = arr[i].todoitem;\n       let author = arr[i].author ;\n       let date = arr[i].date;\n\n    addJsonTask(title, todoitem, author, date);\n\n    }\n\n}\n\nfunction addJsonTask(title, todoitem, author, date){\n   \n    var el = document.createElement('div');\n    var ul = document.createElement('ul'); \n    ul.setAttribute('class', 'jsonULPad');\n    ul.innerHTML='';  \n\n    for (let i=0; i<todoitem.length;i++){\n        var task = document.createElement('li');\n        task.innerHTML = todoitem[i] + '<span class=\"removejtask\" id=\"remove\">x</span>';\n        task.children[0].addEventListener('click', removeTask);\n        \n\n        ul.appendChild(task);\n        el.appendChild(ul);\n    }\n\n    el.innerHTML = '<div class=\"text\"> <div class=\"removejson\">x</div>' + title + '<input type=\"text\" id=\"taskText\"><button id=\"addTaskBtn\">+</button>' + '<br>Author: ' + author  + \n                    '<br>Date:' + date  + '<br>Task:' + el.innerHTML + '</div>'; \n\n    document.getElementById('divOut').appendChild(el);\n    el.children[0].children[0].addEventListener('click', removeTitle);\n    el.children[0].children[2].addEventListener('click', addNewTaskJson);\n\n    function addNewTaskJson(ev){\n        let task = ev.target.parentNode.children[1];\n        let uli = document.createElement('ul');\n        let li = document.createElement('li');\n        \n        li.innerHTML= task.value + '<span id=\"remove\">x</span>';\n       \n        uli.appendChild(li);\n        uli.setAttribute('class', 'jsonULPad');\n        li.addEventListener('click', checkTask);\n        li.children[0].addEventListener('click', removeTask);\n        \n        ev.target.parentNode.appendChild(uli);\n        ev.target.parentNode.children[1].value='';\n    } \n}\n\nconst uname = \"Byte Me\";\nlet date = new Date();\n\nlet date1 = date.getDate();\nlet date2 = date.getMonth() + 1;\nlet date3 = date.getFullYear();\n\nlet addTodoListBtn = document.getElementById('addListBtn');\nlet listTitle = document.getElementById('inputTitleText');\naddTodoListBtn.addEventListener('click', addTodoList);\n\nfunction addTodoList(){\n\tlet list = document.createElement('div');\n\tlist.setAttribute('id', 'manual');\n    list.innerHTML=   '<span id=removeTitle>x</span>' + inputTitleText.value + '<input type=\"text\" id=\"taskText\"> <button id=\"addTaskBtn\">+</button> <br>' + \"Author:\" + uname + `<br>` + \"Date:\"  + date1 + \"/\" + date2 + \"/\" + date3 + `<br>` + \"Task:\" + `<br>` ;\n    \n    list.children[0].addEventListener('click', removeTitle);\n    list.children[2].addEventListener('click', addTask);\n    \n    document.getElementById('divOut').appendChild(list);\n\n    document.getElementById('inputTitleText').value='';\n    \n}\n\nfunction addTask(ev){\n    let task = ev.target.parentNode.children[1];\n    let ul = document.createElement('ul');\n    let li = document.createElement('li');\n    \n    li.innerHTML= task.value + '<span id=\"remove\">x</span>';\n    \n    ul.appendChild(li);\n    li.addEventListener('click', checkTask);\n    li.children[0].addEventListener('click', removeTask);\n\n    ev.target.parentNode.appendChild(ul);\n\n    // document.getElementById('taskText').value='';\n    ev.target.parentNode.children[1].value='';\n\n}\n\nfunction removeTask(ev){\n    let task = ev.target.parentNode.parentNode;\n    task.removeChild(task.children[0]);\n}\n\nfunction removeTitle(ev){\n    ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);\n}\n\nfunction checkTask(ev){\n    ev.target.classList.toggle(\"checked\");\n}\n    document.getElementById(\"uname\").innerHTML = uname;\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });