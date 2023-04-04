import './style.css'
import './form.css'
import { ProjectCreator, showProjects } from './projects';

function caller2() {
    const inputName = document.getElementById('projectName')
    ProjectCreator.arrayCreator(inputName.value)
    showProjects()
}

const addingEventListeners = (() => {
    const btnNameProject = document.getElementById('btnNameProject')
    btnNameProject.addEventListener('click', caller2)
})()