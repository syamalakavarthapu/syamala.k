import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Child } from '../parent/GrandParent';


@Component({

  selector: 'app-Child',
  templateUrl: './Child.component.html',
  styleUrls: ['./Child.component.css']

})

export class ChildComponent 
 {
  @Input() GrandParent!:Child;
  @Output() GrandParentSelected = new EventEmitter<Child>();

  constructor() {}

onChildSelect(){
   this.GrandParentSelected.emit(this.GrandParent);

 }
}