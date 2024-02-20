import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]//,
  //module level 
  //providers:[Employee]
})
export class ModuleModule {
  //class level decorator
  constructor(){
    console.log('module constructore loading ...')
  }
 }
