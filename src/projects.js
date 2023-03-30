export const storage = (() => {
    const ParentArray = [[['default array']]];

    return { ParentArray }

}
)()

export const showProjects = () => {
    const display = document.getElementById('displayOfProjects')
    display.replaceChildren()
    storage.ParentArray.forEach(element => {
        const newDiv = document.createElement('div')
        const nameDiv = document.createElement('h3')

        newDiv.appendChild(nameDiv)
        display.appendChild(newDiv)
        newDiv.classList.add('projects')
        nameDiv.textContent = element[0][0]
    })
}
showProjects()
export const ProjectCreator = (() => {
    const arrayCreator = (name) => {
        const id = storage.ParentArray.length
        const specificArray = [[name, id]]
        storage.ParentArray.push(specificArray)
    }
    return { arrayCreator }
})()
