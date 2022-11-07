import { Component } from "@angular/core";
import { Child } from "./GrandParent";

@Component({
  selector: 'app-Parent',
  templateUrl: './Parent.component.html',
  styleUrls: ['./Parent.component.css']

})

export class ParentComponent  {
  Parent: Child[] | null = null;
  selectedChild: Child | null = null;
   
   constructor() {
      this.Parent = [
        new Child(1,'sam', 'deo',20),
        new Child(2, 'knight','smith', 35),
        new Child(3, 'mage', 'david', 27),
        new Child(3, 'clerik', 'jordan', 42),
        new Child(3, 'frodo', 'blake', 29)
      ];
      console.log(this.Parent);
  
     }

     trackChild(index: number, GrandParent:Child){
    return GrandParent? GrandParent.id : undefined;
  
     }

     onChildSelect(event: Child) {
       this.selectedChild = event;
  
    }
  
  }