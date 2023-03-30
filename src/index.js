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