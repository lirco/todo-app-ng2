import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';
import {TodoList} from './todo-list';
import {TodoService} from './todo-service';
import {RouterOutlet, RouteConfig, RouterLink} from 'angular2/router';

@Component({
  selector: 'todo-app-edit',
  template: `
    <todo-input></todo-input>
    <todo-list></todo-list>
  `,
  directives: [TodoInput, TodoList],
  providers: [TodoService]
})
export class TodoAppEdit {

}

@Component({
  selector: 'todo-app-view',
  template: `
    <todo-list></todo-list>
  `,
  directives: [TodoInput, TodoList],
  providers: [TodoService]
})
export class TodoAppView {

}

@Component({
  selector: 'todo-app',
  template: `
    <nav>
      <a [routerLink]="['View']">view</a>
      <a [routerLink]="['Edit']">edit</a>
    </nav>
    <router-outlet>
  `,
  directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
  {path: '/view', name: 'View', component: TodoAppView, useAsDefault: true},
  {path: '/edit', name: 'Edit', component: TodoAppEdit},
])
export class TodoApp {

}
