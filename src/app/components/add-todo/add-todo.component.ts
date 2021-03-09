import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addRow: EventEmitter<any> = new EventEmitter();

  todoTitle: string = '';
  todoBody: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {
    const todo = {
      title: this.todoTitle,
      body: this.todoBody,
      completed: false
    }

    this.addRow.emit(todo);
  }

}
