import './style.css'
import './form.css'
import { ProjectCreator, showProjects } from './projects';
import { storage, populateStorage, setStorage } from './basic'

const projectName = document.getElementById('projectName')

if (!localStorage.getItem('storage.ParentArray') || !localStorage.getItem('storage.ParentArray')) {
    populateStorage();
} else {
    setStorage();
    showProjects()
}

function caller2() {
    storage.arrayNames.push(projectName.value)
    ProjectCreator.arrayCreator()
    populateStorage()
    showProjects()
}

const addingEventListeners = (() => {
    const btnNameProject = document.getElementById('btnNameProject')
    btnNameProject.addEventListener('click', caller2)
})()