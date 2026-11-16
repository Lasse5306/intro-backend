// import { addTask, getTasks, deleteTask } from './todo.js'
import { addTask, getTasks, deleteTask, getTasksAsJson } from './todo.js'

function printTasks() {
  const tasks = getTasks()
  if (tasks.length === 0) {
    console.log('Your to-do list is empty.')
    return
  }
  console.log('Your to-do list:')
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`)
  }
}

function printTasksFromJson() {
  const list = getTasksAsJson()
  const data = JSON.parse(list) //array
  if (data.length === 0) {
    console.log('The to-do list is empty')
    return
  }
  console.log('Your to-do list:')
  for (let i = 0; i < data.length; i++) {
    //console.log('loop')
    console.log(`${data[i].number}. ${data[i].task}`)
  }
}

addTask('Wash clothes')
addTask('Do the dishes')
addTask('Go for a walk')

printTasks()

const deletedTask = deleteTask(2)
console.log(`Task "${deletedTask}" was removed.`)
printTasks()

try {
  deleteTask(42)
} catch (error) {
  console.log(error.message)
}

console.log(getTasksAsJson())
//console.log('line 46')
printTasksFromJson()
