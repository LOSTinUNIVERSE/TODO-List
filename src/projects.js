import { taskToProject, storage, populateStorage, setStorage } from './basic';
import { clickableTask } from './domElements';

const taskContainer = document.createElement('div')
const display = document.getElementById('displayOfProjects')
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

export const showProjects = () => {
    let number = 0
    display.replaceChildren()
    storage.ParentArray.forEach(element => {
        const newDiv = document.createElement('div')
        const deleteProjectBtn = document.createElement('button')
        const container = document.createElement('div')
        container.id = ('projectContainer')
        newDiv.addEventListener('click', clickableProjects)
        deleteProjectBtn.addEventListener('click', deleteProject)
        newDiv.dataset.array = number
        deleteProjectBtn.dataset.array = number
        console.log(storage.arrayNames);
        newDiv.textContent = storage.arrayNames[number]
        display.appendChild(container)
        container.appendChild(newDiv)
        container.appendChild(deleteProjectBtn)
        newDiv.classList.add('projects')
        number++
    })
}
showProjects()

function deleteProject() {
    storage.ParentArray[this.dataset.array] = []
    taskContainer.replaceChildren()
    storage.ParentArray.splice(this.dataset.array, 1)
    storage.arrayNames.splice(this.dataset.array, 1)
    populateStorage()
    showProjects()
}

export const ProjectCreator = (() => {
    const arrayCreator = () => {
        const specificArray = []
        storage.ParentArray.push(specificArray)
    }
    return { arrayCreator }
})()