/* eslint-disable prefer-destructuring */
import './style.css'
import fundament from './domElements';
import { ProjectCreator, showProjects, clickableProjects } from './projects';

fundament()

function caller2() {
    const inputName = document.getElementById('projectName')
    ProjectCreator.arrayCreator(inputName.value)
    showProjects()
}

const addingEventListeners = (() => {
    const btnNameProject = document.getElementById('btnNameProject')
    btnNameProject.addEventListener('click', caller2)
})()