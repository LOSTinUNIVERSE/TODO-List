import { taskToProject, storage } from './basic';


export const clickableProjects = function () {
    taskToProject.positionOfArray = this.id
    console.log(taskToProject.positionOfArray);
}
const btnAddTask = (() => {
    const projectCreateForm = document.getElementById('projectCreateForm')
    const addTaskBtn = document.getElementById('btnAddTask')
    const cancel = document.getElementById('cancel')
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
    storage.ParentArray.forEach(element => {
        const newDiv = document.createElement('div')
        const nameDiv = document.createElement('h3')
        newDiv.appendChild(nameDiv)
        newDiv.addEventListener('click', clickableProjects)
        newDiv.id = number
        display.appendChild(newDiv)
        newDiv.classList.add('projects')
        nameDiv.textContent = element[0]
        number++
    })
}
showProjects()
export const ProjectCreator = (() => {
    const arrayCreator = (name) => {
        const id = storage.ParentArray.length
        const specificArray = [[name, id]]
        storage.ParentArray.push(specificArray)
    }
    return { arrayCreator }
})()