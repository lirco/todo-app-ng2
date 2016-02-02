import {Component} from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
  selector: 'todo-input',
  template: `
    <input [(ngModel)]="currentItem">
    <button (click)="add()">add</button>
  `
})
export class TodoInput {
  currentItem = '';

  constructor(public todoService: TodoService) {

  }

  add(value) {
    this.todoService.addItem(this.currentItem);
    this.currentItem = '';
  }
}
