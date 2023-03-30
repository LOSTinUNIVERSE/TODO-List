/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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



const taskToProject = (() => {
    const toArray = function (array, task) {
        storage.ParentArray[array].push(task)
    }
    return { toArray }
})()

const FactoryDO = (title, description, dueDate, priority) => {
    const addToArray = function (array) {
        taskToProject.toArray(array, this)
    }
    return { addToArray, title, description, dueDate, priority }
}

const jeff = FactoryDO('jeff', 1, 1, 1)
jeff.addToArray()
console.log(storage.ParentArray);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgUGFyZW50QXJyYXkgPSBbWydkZWZhdWx0IGFycmF5J11dO1xuXG4gICAgcmV0dXJuIHsgUGFyZW50QXJyYXkgfVxuXG59XG4pKClcblxuY29uc3QgUHJvamVjdENyZWF0b3IgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFycmF5Q3JlYXRvciA9IChuYW1lLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IHN0b3JhZ2UuUGFyZW50QXJyYXkubGVuZ3RoXG4gICAgICAgIGNvbnN0IHNwZWNpZmljQXJyYXkgPSBbW25hbWUsIHByaW9yaXR5LCBpZF1dXG4gICAgICAgIHN0b3JhZ2UuUGFyZW50QXJyYXkucHVzaChzcGVjaWZpY0FycmF5KVxuICAgIH1cbiAgICByZXR1cm4geyBhcnJheUNyZWF0b3IgfVxufSkoKVxuXG5cblxuY29uc3QgdGFza1RvUHJvamVjdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgdG9BcnJheSA9IGZ1bmN0aW9uIChhcnJheSwgdGFzaykge1xuICAgICAgICBzdG9yYWdlLlBhcmVudEFycmF5W2FycmF5XS5wdXNoKHRhc2spXG4gICAgfVxuICAgIHJldHVybiB7IHRvQXJyYXkgfVxufSkoKVxuXG5jb25zdCBGYWN0b3J5RE8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IGFkZFRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgdGFza1RvUHJvamVjdC50b0FycmF5KGFycmF5LCB0aGlzKVxuICAgIH1cbiAgICByZXR1cm4geyBhZGRUb0FycmF5LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH1cbn1cblxuY29uc3QgamVmZiA9IEZhY3RvcnlETygnamVmZicsIDEsIDEsIDEpXG5qZWZmLmFkZFRvQXJyYXkoKVxuY29uc29sZS5sb2coc3RvcmFnZS5QYXJlbnRBcnJheSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9