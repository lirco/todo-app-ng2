import {Pipe} from 'angular2/core';
import {TodoItem} from './todo-service';

@Pipe({name: 'completed'})
export class TodoCompleted {
  transform(x: TodoItem[], [completed]) {
    return x.filter(item => item.completed === completed);
  }
}
