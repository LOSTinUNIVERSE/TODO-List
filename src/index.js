import './style.css'
import './form.css'
import { ProjectCreator, showProjects } from './projects';
import { storage } from './basic';

const projectName = document.getElementById('projectName')

export function setStorage() {
    storage.ParentArray = JSON.parse(localStorage.getItem('storage.ParentArray'))
    storage.arrayNames = JSON.parse(localStorage.getItem('storage.arrayNames'))
    showProjects()
}
export function populateStorage() {
    localStorage.setItem('storage.ParentArray',
        JSON.stringify(storage.ParentArray))
    localStorage.setItem('storage.arrayNames',
        JSON.stringify(storage.arrayNames))
    setStorage()
}

if (!localStorage.getItem('storage.ParentArray') || !localStorage.getItem('storage.ParentArray')) {
    populateStorage();
} else {
    setStorage();
}


function caller2() {
    storage.arrayNames.push(projectName.value)
    const inputName = document.getElementById('projectName')
    ProjectCreator.arrayCreator(inputName.value)
    populateStorage()
    showProjects()
}

const addingEventListeners = (() => {
    const btnNameProject = document.getElementById('btnNameProject')
    btnNameProject.addEventListener('click', caller2)
})()