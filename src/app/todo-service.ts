import {Injectable} from 'angular2/core';

declare var fetch: any;

export class TodoItem {
  constructor(public text: string, public completed: boolean) {}
}

@Injectable()
export class TodoService {
  todos: TodoItem[] = [];

  constructor() {
    fetch('/todos.json').then(res => res.json()).then(todos => {
      this.todos = todos;
    });
  }

  toggle(todo) {
    let newItem = new TodoItem(todo.text, !todo.completed);
    this.todos = this.todos.map(item => item === todo ? newItem : item);
  }

  addItem(text) {
    this.todos = this.todos.concat(new TodoItem(text, false));
  }
}
