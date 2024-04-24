import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent implements OnInit{

  form: FormGroup;

  // constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = new FormGroup({
       firstName: new FormControl(null),
       lastName: new FormControl(null),
       mobileNo: new FormControl(null),
       address: new FormControl(null),
       email: new FormControl(null),
       age: new FormControl(null),
       dob: new FormControl(null)
     });
   }

  onSubmit() {
    console.log('Form submitted with values:', this.form.value);
  }
}
