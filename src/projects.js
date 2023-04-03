import { taskToProject, storage, form } from './basic';
import { clickableTask } from './domElements';

const taskContainer = document.createElement('div')
taskContainer.id = 'taskContainer'
const main = document.getElementById('main')
main.appendChild(taskContainer)
let numberForDatasetNumber = 0
function refreshNumberForDatasetNumber() {
    numberForDatasetNumber = 0
}
export const clickableProjects = function () {
    let number = 0
    taskToProject.positionOfArray = this.id
    taskContainer.replaceChildren()
    storage.ParentArray[this.id].forEach(item => {
        const task = document.createElement('div')
        const nameDiv = document.createElement('h3')
        nameDiv.textContent = item.title
        task.appendChild(nameDiv)
        task.id = number
        task.dataset.array = this.id
        task.dataset.num = numberForDatasetNumber
        taskContainer.appendChild(task)
        task.classList.add('task')
        task.addEventListener('click', clickableTask)
        number++
        numberForDatasetNumber++
    })
    // below code is to avoid refreshing the number 
    let isClicked = false
    if (isClicked == this.id) { return }
    isClicked = this.id
    form.refreshNumber()
    refreshNumberForDatasetNumber()
}
const btnAddTask = (() => {
    const projectCreateForm = document.getElementById('projectCreateForm')
    const addTaskBtn = document.getElementById('btnAddTask')
    let switcher = true
    function showInput() {
        if (switcher == true) {
            projectCreateForm.style.display = 'none'
            switcher = false
        }
        else { projectCreateForm.style.display = 'grid'; switcher = true }
    }
    addTaskBtn.addEventListener('click', showInput)
})()

export const showProjects = () => {
    let number = 0
    const display = document.getElementById('displayOfProjects')
    display.replaceChildren()
    const projectName = document.getElementById('projectName')
    storage.arrayNames.push(projectName.value)
    storage.ParentArray.forEach(element => {
        const newDiv = document.createElement('div')
        newDiv.addEventListener('click', clickableProjects)
        newDiv.id = number
        newDiv.textContent = storage.arrayNames[number]
        display.appendChild(newDiv)
        newDiv.classList.add('projects')
        number++
    })
    projectName.value = ''
}
showProjects()
export const ProjectCreator = (() => {
    const arrayCreator = () => {
        const id = storage.ParentArray.length
        const specificArray = []
        storage.ParentArray.push(specificArray)
    }
    return { arrayCreator }
})()