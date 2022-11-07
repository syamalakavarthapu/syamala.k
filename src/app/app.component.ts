import { Input } from '@angular/core';
import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { FormGroup, FormControl, NgModel } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('someInput') someInput!: ElementRef;
  
  data:Array<any>
  People:any;

  contactForm = new FormGroup({
   firstname: new FormControl(),
   lastname: new FormControl(),
   isMarried: new FormControl(),
   country: new FormControl() 
  })


  constructor() {
    this.data=[
      { firstName: 'sam', lastName: 'doe', age: '20'},
      { firstName: 'knight', lastName: 'smith', age: '35'},
      { firstName: 'mage', lastName: 'david', age: '27'},
      { firstName: 'clerik', lastName: 'jordan', age: '42'},
      { firstName: 'frodo', lastName: 'blake', age: '29'}
    ];
  }
  ngAfterViewInit() {
    console.log(this.someInput);
  }
  onSubmit() {
   console.log(this.contactForm.value);
  }
}
