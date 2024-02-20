import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ModuleModule } from './module/module.module';
import { ChildComponent } from './child/child.component';

class a{
  constructor(){
    console.log("A class not has the decorator")
  }

}
//const instanceOfA = new a(); //check it 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ContactFormComponent,ModuleModule,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UI';
  //class level decorator
  constructor(){
    console.log('APPComponet contructor ....')
  }
  @HostListener('click',['$event'])
  show(){
    alert('HostListener alert');
  }
}
