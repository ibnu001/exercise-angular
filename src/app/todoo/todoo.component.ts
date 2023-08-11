import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-todoo',
  templateUrl: './todoo.component.html',
  styleUrls: ['./todoo.component.css']
})
export class TodooComponent {
  imageSrc: string = 'assets/images/undraw_To_do_re_jaef.png'
  imageAlt: string = 'todo image'

  @Input()
  account = {
    email: '',
    password: '',
    isLogin: false
  }

  todo: string = ''
  description: string = ''
  todoList: { todo: string, desc: string, isDone: boolean, doneLabel: string }[] = []

  onTodo(evTodo: any): void {
    this.todo = evTodo.target.value
  }

  onDescription(evDes: any): void {
    this.description = evDes.target.value
  }

  tambah() {
    if (this.todo && this.description) {
      const todo = {
        todo: this.todo,
        desc: this.description,
        isDone: false,
        doneLabel: 'Done'
      }

      this.todoList.push(todo)
      this.description = ''
    }

    console.log(this.todoList)
  }


  isDone(i: number) {
    const todoItem = this.todoList[i]
    todoItem.isDone = !todoItem.isDone

    if (todoItem.isDone) {
      todoItem.doneLabel = 'Cancel'
    } else {
      todoItem.doneLabel = 'Done'
    }
  }

  delete(i: number) {
    this.todoList.splice(i, 1)
  }

  logout() {
    this.account.isLogin = false
  }


}
