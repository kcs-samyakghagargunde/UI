import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  outputs:['childemiter']
})
export class Child2Component {
  childemiter=new EventEmitter();
  OnChange(val:any){
    console.log(val);
    this.childemiter.emit(val);
  }
}
