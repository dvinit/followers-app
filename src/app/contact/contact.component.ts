import { FormsModule } from '@angular/forms';
import { Component, OnInit, NgModule, Input,Directive } from '@angular/core';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
  log(x){
    console.log(x);
  }
 coursetype=
 [
 {type:"Development" },
 {type:"Coding" },
 {type:"Core" }
]

}
