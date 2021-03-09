import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Todo } from "../models/Todo";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl:string = 'http://localhost:8000/api/todos';

  constructor(private http:HttpClient) { }

  fetchTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  deleteTodos(todo: Todo):Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${todo.id}`, httpOptions)
  }

  addTodo(todo: Todo):Observable<any> {
    return this.http.post<Todo>(`${this.baseUrl}`, todo, httpOptions)
  }
}
