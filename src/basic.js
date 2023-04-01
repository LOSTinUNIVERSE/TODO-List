
export const storage = (() => {
    const ParentArray = [['default array']];

    return { ParentArray }

}
)()
export const taskToProject = (() => {
    const positionOfArray = ''
    const toArray = function (array, task) {
        storage.ParentArray[array].push(task)
    }

    return { toArray, positionOfArray }
})()

export const FactoryDO = (title, description, dueDate, priority) => {
    const addToArray = function (array) {
        taskToProject.toArray(array, this)
    }
    return { addToArray, title, description, dueDate, priority }
}

const form = () => {
    const submitBtn = document.getElementById('submit')
    const titleInput = document.getElementById('title')
    const descriptionInput = document.getElementById('description')
    const dateInput = document.getElementById('dateInput')
    const priorityInput = document.getElementById('priorityInput')

    const addTask = function (event) {
        if (taskToProject.positionOfArray == '') {
            console.log('wrong');
            event.preventDefault()
            return
        }
        const newTask = FactoryDO(titleInput.value, descriptionInput.value, dateInput.value, priorityInput.value)
        newTask.addToArray(taskToProject.positionOfArray)
        console.log(newTask);
        event.preventDefault()

    }
    submitBtn.addEventListener('click', addTask, false)
    return { titleInput, descriptionInput }
}
form()