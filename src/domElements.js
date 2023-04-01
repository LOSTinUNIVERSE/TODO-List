import { storage } from './basic'

let switcher = ''

// need to change it to function, to avoid confusion
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

function removeDiv() {
    const test = document.querySelector(`[data-num='${this.dataset.num}']`)
    test.remove()
    console.log(test);
    removeEditMenu()
}
const btnDeleteDiv = () => {
    const editMenu = document.getElementById('editMenu')
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'remove'
    removeBtn.dataset.num = editMenu.dataset.num
    editMenu.appendChild(removeBtn)
    removeBtn.addEventListener('click', removeDiv)
}


export const clickableTask = function () {
    if (switcher === 0) { return }
    const main = document.getElementById('main')
    const editMenu = document.createElement('div')
    editMenu.id = 'editMenu'
    main.appendChild(editMenu)
    switcher = 0
    const task = storage.ParentArray[this.dataset.array][this.id];
    // !
    editMenu.dataset.num = this.dataset.num

    const editMenuInfo = () => {
        const editMenu = document.getElementById('editMenu')
        const titleOfTask = document.createElement('h3')
        const description = document.createElement('p')
        const dueDate = document.createElement('p')
        const priority = document.createElement('p')

        editMenu.appendChild(titleOfTask)
        editMenu.appendChild(description)
        editMenu.appendChild(dueDate)
        editMenu.appendChild(priority)


        titleOfTask.textContent = task.title
        description.textContent = task.description
        dueDate.textContent = task.dueDate
        priority.textContent = task.priority
    }
    editMenuInfo()
    btnRemoveEDitMenu()
    btnDeleteDiv()
    return { switcher }
}

