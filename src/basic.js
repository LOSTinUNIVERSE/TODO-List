
export const storage = (() => {
    const ParentArray = [[]];

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

export const FactoryDO = (id, title, description, dueDate, priority) => {
    const addToArray = function (array) {
        taskToProject.toArray(array, this)
    }
    return { addToArray, id, title, description, dueDate, priority }
}
export const form = (() => {
    const submitBtn = document.getElementById('submit')
    const titleInput = document.getElementById('title')
    const descriptionInput = document.getElementById('description')
    const dateInput = document.getElementById('dateInput')
    const priorityInput = document.getElementById('priorityInput')
    let number = 0
    function refreshNumber() {
        number = 0
    }
    const addTask = function (event) {
        if (taskToProject.positionOfArray == '') {
            console.log('wrong');
            event.preventDefault()
            return
        }
        const newTask = FactoryDO(number, titleInput.value, descriptionInput.value, dateInput.value, priorityInput.value)
        newTask.addToArray(taskToProject.positionOfArray)
        console.log(newTask);
        event.preventDefault()
        number++

    }
    submitBtn.addEventListener('click', addTask, false)
    return { titleInput, descriptionInput, refreshNumber }
})()


