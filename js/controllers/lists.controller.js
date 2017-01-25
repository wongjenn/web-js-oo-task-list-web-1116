'use strict';
// Lists Controller
class ListsController {
  constructor() {
    //0 : HTMLNode, length : 1, context : HTMLNode, selector : '#add_list'
    this.$addListForm = $('#add_list')
    this.$listTitleInput = $('#list_title')
    this.$selectListMenu = $('#select_list')
    this.$addTaskForm = $('#add_task')
    this.$wrapper = $('#wrapper')
  }
  init() {
   this.$addTaskForm.hide()
   this.$addListForm.submit((event) => {
    event.preventDefault()
    let title = this.$listTitleInput.val()
    let list = new List(title)
    list.build()
    $(`ul#list-${list.id}`).parent().children('h2').children('button').click(() => {
        $(`ul#list-${list.id}`).closest('div').remove()
    })
    this.$addTaskForm.show()
  })

  }
}
