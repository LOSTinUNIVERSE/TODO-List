/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

const storage = (() => {
    const ParentArray = [['default array']];

    return { ParentArray }

}
)()
const ProjectCreator = (() => {
    const arrayCreator = (name, priority) => {
        const id = storage.ParentArray.length
        const specificArray = [[name, priority, id]]
        storage.ParentArray.push(specificArray)
    }
    return { arrayCreator }
})()

// ProjectCreator.arrayCreator('1st array', 3);
// ProjectCreator.arrayCreator('2 array', 5);
// ProjectCreator.arrayCreator('6 array', 6);
// storage.ParentArray.forEach(item => console.log(item))


const taskToProject = (() => {
    const toArray = function (array, task) {
        storage.ParentArray[array].push(task)
    }
    return { toArray }
})()

const FactoryDO = (title, description, dueDate, priority) => {
    const addToArray = (array) => {
        console.log(this);
        taskToProject.toArray(array, this)
    }
    return { addToArray, title, description, dueDate, priority }
}
const test = []

const jeff = FactoryDO('jeff', test[1], test[2], test[3],)
jeff.addToArray()
console.log(this);
console.log(storage.ParentArray[0]);

// const peff = FactoryDO('peff', test[1], test[2], test[3],)
// peff.addToArray()
// console.log(pusher.array[1]);
// console.log(pusher.array);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVRTlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBQYXJlbnRBcnJheSA9IFtbJ2RlZmF1bHQgYXJyYXknXV07XG5cbiAgICByZXR1cm4geyBQYXJlbnRBcnJheSB9XG5cbn1cbikoKVxuY29uc3QgUHJvamVjdENyZWF0b3IgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFycmF5Q3JlYXRvciA9IChuYW1lLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IHN0b3JhZ2UuUGFyZW50QXJyYXkubGVuZ3RoXG4gICAgICAgIGNvbnN0IHNwZWNpZmljQXJyYXkgPSBbW25hbWUsIHByaW9yaXR5LCBpZF1dXG4gICAgICAgIHN0b3JhZ2UuUGFyZW50QXJyYXkucHVzaChzcGVjaWZpY0FycmF5KVxuICAgIH1cbiAgICByZXR1cm4geyBhcnJheUNyZWF0b3IgfVxufSkoKVxuXG4vLyBQcm9qZWN0Q3JlYXRvci5hcnJheUNyZWF0b3IoJzFzdCBhcnJheScsIDMpO1xuLy8gUHJvamVjdENyZWF0b3IuYXJyYXlDcmVhdG9yKCcyIGFycmF5JywgNSk7XG4vLyBQcm9qZWN0Q3JlYXRvci5hcnJheUNyZWF0b3IoJzYgYXJyYXknLCA2KTtcbi8vIHN0b3JhZ2UuUGFyZW50QXJyYXkuZm9yRWFjaChpdGVtID0+IGNvbnNvbGUubG9nKGl0ZW0pKVxuXG5cbmNvbnN0IHRhc2tUb1Byb2plY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXksIHRhc2spIHtcbiAgICAgICAgc3RvcmFnZS5QYXJlbnRBcnJheVthcnJheV0ucHVzaCh0YXNrKVxuICAgIH1cbiAgICByZXR1cm4geyB0b0FycmF5IH1cbn0pKClcblxuY29uc3QgRmFjdG9yeURPID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBhZGRUb0FycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICB0YXNrVG9Qcm9qZWN0LnRvQXJyYXkoYXJyYXksIHRoaXMpXG4gICAgfVxuICAgIHJldHVybiB7IGFkZFRvQXJyYXksIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfVxufVxuY29uc3QgdGVzdCA9IFtdXG5cbmNvbnN0IGplZmYgPSBGYWN0b3J5RE8oJ2plZmYnLCB0ZXN0WzFdLCB0ZXN0WzJdLCB0ZXN0WzNdLClcbmplZmYuYWRkVG9BcnJheSgpXG5jb25zb2xlLmxvZyh0aGlzKTtcbmNvbnNvbGUubG9nKHN0b3JhZ2UuUGFyZW50QXJyYXlbMF0pO1xuXG4vLyBjb25zdCBwZWZmID0gRmFjdG9yeURPKCdwZWZmJywgdGVzdFsxXSwgdGVzdFsyXSwgdGVzdFszXSwpXG4vLyBwZWZmLmFkZFRvQXJyYXkoKVxuLy8gY29uc29sZS5sb2cocHVzaGVyLmFycmF5WzFdKTtcbi8vIGNvbnNvbGUubG9nKHB1c2hlci5hcnJheSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9pbmRleC5qc1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9