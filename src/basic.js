
export const storage = (() => {
    const ParentArray = [[]];
    const arrayNames = []

    return { ParentArray, arrayNames }

})()
export function setStorage() {
    storage.ParentArray = JSON.parse(localStorage.getItem('storage.ParentArray'))
    storage.arrayNames = JSON.parse(localStorage.getItem('storage.arrayNames'))
}
export function populateStorage() {
    localStorage.setItem('storage.ParentArray',
        JSON.stringify(storage.ParentArray))
    localStorage.setItem('storage.arrayNames',
        JSON.stringify(storage.arrayNames))
    setStorage()
}

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
    function emptizeInputs() {
        titleInput.value = ''
        descriptionInput.value = ''
        dateInput.value = ''
    }

    const addTask = function (event) {
        if (taskToProject.positionOfArray == '') {
            console.log('wrong');
            event.preventDefault()
            return
        }
        const newTask = FactoryDO(number, titleInput.value, descriptionInput.value, dateInput.value, priorityInput.value)
        newTask.addToArray(taskToProject.positionOfArray)
        populateStorage()
        number++
        emptizeInputs()
        document.querySelector(`[data-array='${taskToProject.positionOfArray}']`).click()
        event.preventDefault()
    }
    submitBtn.addEventListener('click', addTask, false)
    return { titleInput, descriptionInput }
})()