import { storage } from './basic'
// import { showProjects } from './projects'
// import { btnAddTask } from './projects'

let switcher = ''
let isEditForm = ''

// need to change it to function, to avoid confusion
export const removeEditMenu = () => {
    switcher = 1
    const editMenu = document.getElementById('editMenu')
    editMenu.remove()
}
// this function is added from projects.js 
const btnAddTask = (() => {
    const projectCreateForm = document.getElementById('projectCreateForm')
    const addTaskBtn = document.getElementById('btnAddTask')
    let switcher = true
    function showInput() {
        // here we tr
        if (isEditForm == 0) {
            return console.error('delete change');
        }
        if (switcher == true) {
            projectCreateForm.style.display = 'none'
            switcher = false
        }
        else { projectCreateForm.style.display = 'grid'; switcher = true }
    }
    addTaskBtn.addEventListener('click', showInput)
})()
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
    neededArray = neededArray.filter((item) => item.id != this.dataset.num)
    storage.ParentArray[this.dataset.array] = neededArray
    console.log('needed array after', neededArray);
    removeEditMenu()
}
const btnDeleteDiv = () => {
    const editMenu = document.getElementById('editMenu')
    const removeBtn = document.createElement('button')
    removeBtn.id = 'removeBtn'
    removeBtn.textContent = 'remove'
    removeBtn.dataset.num = editMenu.dataset.num
    removeBtn.dataset.array = editMenu.dataset.array
    editMenu.appendChild(removeBtn)
    removeBtn.addEventListener('click', removeDiv)
}

// ! current workplace
const editTask = (dataArray, dataNum) => {
    const editMenu = document.getElementById('editMenu')
    const editBtn = document.createElement('button')
    const projectCreateForm = document.getElementById('projectCreateForm')
    const submitBtn = document.getElementById('submit')
    const container1 = document.getElementById('container1')
    const saveChangesBtn = document.createElement('button')
    const cancelBtn = document.createElement('button')

    const titleInput = document.getElementById('title')
    const descriptionInput = document.getElementById('description')
    const dateInput = document.getElementById('dateInput')
    const priorityInput = document.getElementById('priorityInput')


    function discardChanges() {
        container1.style.display = 'grid'
        submitBtn.style.display = 'grid'
        cancelBtn.remove()
        saveChangesBtn.remove()
        projectCreateForm.style.display = 'none'
        switcher = 1
        isEditForm = 1

    }
    const clearInputs = function () {
        titleInput.value = ''
        descriptionInput.value = ''
        dateInput.value = ''
    }
    function changeItemsInfo() {
        let task = storage.ParentArray[this.dataset.array].filter(item => item.id == this.dataset.num);
        task = task[0]
        isEditForm = 0
        console.log('task before', task);
        task.title = titleInput.value
        task.description = descriptionInput.value
        task.priority = dateInput.value
        task.dueDate = priorityInput.value
        console.log('task after', task);
        clearInputs()
        discardChanges()
    }
    function openChangeForm() {
        removeEditMenu()
        switcher = 0

        projectCreateForm.style.display = 'grid'
        container1.style.display = 'none'
        submitBtn.style.display = 'none'

        projectCreateForm.appendChild(saveChangesBtn)
        projectCreateForm.appendChild(cancelBtn)
        saveChangesBtn.dataset.array = this.dataset.array
        saveChangesBtn.dataset.num = this.dataset.num

        cancelBtn.textContent = 'cancel changes'
        saveChangesBtn.textContent = 'save changes'
        cancelBtn.addEventListener('click', discardChanges)
        saveChangesBtn.addEventListener('click', changeItemsInfo)
    }
    editMenu.appendChild(editBtn)
    editBtn.textContent = 'edit'
    editBtn.dataset.array = dataArray
    editBtn.dataset.num = dataNum
    editBtn.addEventListener('click', openChangeForm)
}


export const clickableTask = function () {
    if (switcher === 0) { return }
    const main = document.getElementById('main')
    const editMenu = document.createElement('div')
    editMenu.id = 'editMenu'
    main.appendChild(editMenu)
    switcher = 0
    let task = storage.ParentArray[this.dataset.array].filter(item => item.id == this.dataset.num);
    task = task[0]
    editMenu.dataset.num = this.dataset.num
    editMenu.dataset.array = this.dataset.array
    console.log('this', this);

    const editMenuInfo = () => {
        const editMenu = document.getElementById('editMenu')
        const infoSection = document.createElement('div')
        editMenu.appendChild(infoSection)
        const titleOfTask = document.createElement('h3')
        const description = document.createElement('p')
        const dueDate = document.createElement('p')
        const priority = document.createElement('p')

        infoSection.appendChild(titleOfTask)
        infoSection.appendChild(description)
        infoSection.appendChild(priority)
        infoSection.appendChild(dueDate)

        titleOfTask.textContent = task.title
        description.textContent = task.description
        priority.textContent = task.priority
        dueDate.textContent = task.dueDate
    }
    editMenuInfo()
    btnRemoveEDitMenu()
    btnDeleteDiv()
    editTask(this.dataset.array, this.dataset.num)

    // return { switcher }
}

