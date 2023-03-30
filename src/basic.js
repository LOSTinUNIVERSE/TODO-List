export const storage = (() => {
    const ParentArray = [['default array']];

    return { ParentArray }

}
)()

export const showProjects = () => {
    storage.ParentArray.forEach(item => document.createElement('div'))
}

export const ProjectCreator = (() => {
    const arrayCreator = (name) => {
        const id = storage.ParentArray.length
        const specificArray = [[name, id]]
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