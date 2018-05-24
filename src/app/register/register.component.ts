import { Component, OnInit } from '@angular/core';
import { User } from '../mainpage/profile/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  myForm: FormGroup;

  onSubmit() {
    console.log(this.myForm);
    this.myForm.reset();
}
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required)
    });
  }

}
