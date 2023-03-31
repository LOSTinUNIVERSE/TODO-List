
export const storage = (() => {
    const ParentArray = [['default array']];

    return { ParentArray }

}
)()
export const taskToProject = (() => {
    const positionOfArray = ''
    const toArray = function (array, task) {
        console.log(storage.ParentArray);
        storage.ParentArray[array].push(task)
    }

    return { toArray, positionOfArray }
})()

export const FactoryDO = (title, description,) => {
    const addToArray = function (array) {
        taskToProject.toArray(array, this)
    }
    return { addToArray, title, description, }
}

const form = () => {
    const submitBtn = document.getElementById('submit')
    const titleInput = document.getElementById('title')
    const descriptionInput = document.getElementById('description')

    const addTask = function (event) {
        if (taskToProject.positionOfArray == '') {
            console.log('wrong');
            event.preventDefault()
            return
        }
        const newTask = FactoryDO(titleInput.value, descriptionInput.value)
        newTask.addToArray(taskToProject.positionOfArray)
        event.preventDefault()

    }
    submitBtn.addEventListener('click', addTask, false)
    return { titleInput, descriptionInput }
}
form()