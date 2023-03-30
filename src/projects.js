import { taskToProject } from './basic';

export const storage = (() => {
    const ParentArray = [[['default array']]];

    return { ParentArray }

}
)()
// * when divs are clicked they can set up their id as an argument for the 2 
// * argument while creating objects
export const clickableProjects = function () {
    taskToProject.positionOfArray = this.id
    console.log(taskToProject.positionOfArray);
}

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
        nameDiv.textContent = element[0][0]
        number++
    })
    console.log(storage.ParentArray);
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

