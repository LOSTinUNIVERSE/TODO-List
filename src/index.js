const storage = (() => {
    const ParentArray = [['default array']];

    return { ParentArray }

}
)()
const ProjectCreator = (() => {
    const arrayCreator = (name, priority) => {
        const id = storage.ParentArray.length
        const specificArray = [[name, priority, id]]
        storage.ParentArray.push(specificArray)
    }
    return { arrayCreator }
})()

// ProjectCreator.arrayCreator('1st array', 3);
// ProjectCreator.arrayCreator('2 array', 5);
// ProjectCreator.arrayCreator('6 array', 6);
// storage.ParentArray.forEach(item => console.log(item))


const taskToProject = (() => {
    const toArray = function (array, task) {
        storage.ParentArray[array].push(task)
    }
    return { toArray }
})()

const FactoryDO = (title, description, dueDate, priority) => {
    const addToArray = (array) => {
        console.log(this);
        taskToProject.toArray(array, this)
    }
    return { addToArray, title, description, dueDate, priority }
}
const test = []

const jeff = FactoryDO('jeff', test[1], test[2], test[3],)
jeff.addToArray()
console.log(this);
console.log(storage.ParentArray[0]);

// const peff = FactoryDO('peff', test[1], test[2], test[3],)
// peff.addToArray()
// console.log(pusher.array[1]);
// console.log(pusher.array);