import { Component } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [Child2Component],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  inputs:['getData']
})
export class ChildComponent {
  getData:any
cdata:any;
getdata(val:any){
  this.cdata=val;
}
}
