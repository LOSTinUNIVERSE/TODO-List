import './style.css'
import fundament from './domElements';
import { storage, ProjectCreator, showProjects } from './basic';

fundament()

function createDivs() {

}
function caller2() {
    const inputName = document.getElementById('projectName')
    ProjectCreator.arrayCreator(inputName.value)
    showProjects()

}

const addingEventListeners = (() => {
    const btnCreateObject = document.getElementById('btnCreateObject')
    btnCreateObject.addEventListener('click', caller2)
})()