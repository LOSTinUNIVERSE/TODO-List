
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