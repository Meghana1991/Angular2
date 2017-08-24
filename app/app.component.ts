import {Component, NgModule, VERSION} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2 style="color:blue;">Hello {{name}}</h2>
      <h2 [style.color] = "color"> Grrreen </h2>
      <button (click) = "changeToRed()">Toggle Red Green Here</button>
    </div>
  `,
})
export class AppComponent {
  
  //[] for property binding
  //() for event binding
  
  name:string;
  
  constructor() {
    this.name  = `Angular`
    this.color = "green"
  }
  
  name = "abc" // constructor would be given value
  
  changeToRed(){
    this.color = (this.color == "green"?"red":"green");
  }
}
