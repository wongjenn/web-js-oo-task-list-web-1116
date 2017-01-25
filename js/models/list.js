'use strict';

const listCounter = []
class List{
  constructor(title){
    this.title = title
    this.tasks = []
    this.id = listCounter.length
    listCounter.push(this)
  }
  listEl(){
    return `<div class="list"><h2><button class="destroy-list">x</button> ${this.title}</h2><ul id="list-${this.id}" data-id="${this.id}"></ul></div>`
  }
  optionEl(){
    return `<option value="${this.id}">${this.title}</option>`
  }
  build(){
    $('#lists').append(`${this.listEl()}`)
    $('#select_list').append(`${this.optionEl()}`)
    debugger
  }
}
List.all = listCounter
