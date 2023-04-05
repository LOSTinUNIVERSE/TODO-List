import './style.css'
import './form.css'
import { ProjectCreator, showProjects } from './projects';
import { storage } from './basic';

export function setStorage() {
    storage.ParentArray = JSON.parse(localStorage.getItem('storage.ParentArray'))
    showProjects()
}
export function populateStorage() {
    localStorage.setItem('storage.ParentArray',
        JSON.stringify(storage.ParentArray))
    setStorage()
}

if (!localStorage.getItem('storage.ParentArray')) {
    populateStorage();
} else {
    setStorage();
}

function caller2() {
    populateStorage()
    const inputName = document.getElementById('projectName')
    ProjectCreator.arrayCreator(inputName.value)
    showProjects()
}

const addingEventListeners = (() => {
    const btnNameProject = document.getElementById('btnNameProject')
    btnNameProject.addEventListener('click', caller2)
})()