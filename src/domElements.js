import { storage } from './basic'

let switcher = ''

export const removeEditMenu = () => {
    switcher = 1
    const editMenu = document.getElementById('editMenu')
    editMenu.remove()
}


const btnRemoveEDitMenu = () => {
    const editMenu = document.getElementById('editMenu')
    const cancel = document.createElement('button')
    editMenu.appendChild(cancel)
    cancel.addEventListener('click', removeEditMenu)
}



export const clickableTask = function () {
    if (switcher === 0) { return }
    const main = document.getElementById('main')
    const editMenu = document.createElement('div')
    editMenu.id = 'editMenu'
    main.appendChild(editMenu)
    switcher = 0
    const task = storage.ParentArray[this.dataset.array][this.id];

    const editMenuInfo = () => {
        const editMenu = document.getElementById('editMenu')
        const titleOfTask = document.createElement('h3')
        const description = document.createElement('p')

        editMenu.appendChild(titleOfTask)
        editMenu.appendChild(description)

        titleOfTask.textContent = task.title
        description.textContent = task.description
    }

    editMenuInfo()
    btnRemoveEDitMenu()
    return { switcher }
}

