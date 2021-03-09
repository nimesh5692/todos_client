import { Component, OnInit, DoCheck } from '@angular/core';
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos?: Todo[];
  
  constructor (private todoService:TodoService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.todoService?.fetchTodos().subscribe(res => {
      this.todos = res;
    });
  }

  deleteTodo(todo:Todo): void {
    this.todoService.deleteTodos(todo).subscribe(res => {
      alert(res.message);
    });

    this.fetchData();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(res => {
      alert(res.message);
    })
  }

}
