'use strict';
// Tasks Controller
class TasksController {
 constructor() {
   this.$addTaskForm = $('#add_task')
   this.$taskDescriptionInput = $('#task_description')
   this.$selectListMenu = $('#select_list')
   this.$taskPriorityInput = $('#task_priority')
   this.$wrapper = $('#wrapper')
 }
 init() {
  this.$addTaskForm.submit((event) => {
    event.preventDefault()
    var description = this.$taskDescriptionInput.val()
    var priority = this.$taskPriorityInput.val()
    var listId = this.$selectListMenu.val()
    var list = List.all[listId]
    var task = new Task(description,priority,list)
    var taskId = task.id
    task.build()
    $(`ul[data-id=${listId}]`).children(`li[data-id=${taskId}]`).children('button').click(() => {
       $(`ul[data-id=${listId}]`).children(`li[data-id=${taskId}]`).remove()
       var indexOfTaskToRemove = list.tasks.indexOf(task)
       list.tasks[indexOfTaskToRemove] = null
    })
  })
 }
}
