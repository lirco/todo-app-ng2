import {Component} from 'angular2/core';
import {TodoService} from './todo-service';
import {TodoCompleted} from './todo-completed';

@Component({ 
  selector: 'todo-list',
  template: `
    <style>
      .completed {
        color: green;
      }
    </style>
    <ul>
      <li *ngFor="#todo of todoService.todos | completed:false">
       <span [ngClass]="{completed: todo.completed}" (click)="todoService.toggle(todo)">{{todo.text}}</span>
      </li>
    </ul>
  `,
  pipes: [TodoCompleted]
})
export class TodoList {
  constructor(public todoService: TodoService) {

  }
}
