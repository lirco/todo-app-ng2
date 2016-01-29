import {Component} from 'angular2/core';


@Component({
  selector: 'ng2-training-app',
  providers: [],
  templateUrl: 'app/ng2-training.html',
  directives: [],
  pipes: []
})
export class Ng2TrainingApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
