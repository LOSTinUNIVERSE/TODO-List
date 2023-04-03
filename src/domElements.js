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

    let neededArray = storage.ParentArray[this.dataset.array]
    console.log('needed array before', neededArray);
    console.log('dataset number', this.dataset.num,);
    neededArray = neededArray.filter((item) => item.id != this.dataset.num)
    storage.ParentArray[this.dataset.array] = neededArray
    console.log('needed array after', neededArray);
    removeEditMenu()
}
const btnDeleteDiv = () => {
    const editMenu = document.getElementById('editMenu')
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'remove'
    // !finished here, it does not remove things properly 
    removeBtn.dataset.num = editMenu.dataset.num
    removeBtn.dataset.array = editMenu.dataset.array
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
    console.log(this, 'this');
    let task = storage.ParentArray[this.dataset.array].filter(item => item.id == this.dataset.num);
    task = task[0]
    // ! here we made small changes to the task^
    console.log(task, ' our task');
    // !
    editMenu.dataset.num = this.dataset.num
    editMenu.dataset.array = this.dataset.array

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

        // console.log(task);
        // console.log(task.title);
        titleOfTask.textContent = task.title
        description.textContent = task.description
        dueDate.textContent = task.dueDate
        priority.textContent = task.priority
        // console.log(titleOfTask.textContent);
        // console.log(description.textContent);
        // console.log(dueDate.textContent);
    }
    editMenuInfo()
    btnRemoveEDitMenu()
    btnDeleteDiv()
    return { switcher }
}

