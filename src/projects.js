import { taskToProject, storage } from './basic';
import { clickableTask } from './domElements';

const taskContainer = document.createElement('div')
taskContainer.id = 'taskContainer'
const main = document.getElementById('main')
main.appendChild(taskContainer)


export const clickableProjects = function () {
    let number = 0
    taskToProject.positionOfArray = this.dataset.array
    taskContainer.replaceChildren()
    storage.ParentArray[this.dataset.array].forEach(item => {
        const task = document.createElement('div')
        const nameDiv = document.createElement('h3')
        nameDiv.textContent = item.title
        task.appendChild(nameDiv)
        task.id = number
        task.dataset.array = this.dataset.array
        // task.dataset.num = numberForDatasetNumber
        task.dataset.num = item.id
        taskContainer.appendChild(task)
        task.classList.add('task')
        task.addEventListener('click', clickableTask)
        number++
    })
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
        newDiv.dataset.array = number
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
        const specificArray = []
        storage.ParentArray.push(specificArray)
    }
    return { arrayCreator }
})()