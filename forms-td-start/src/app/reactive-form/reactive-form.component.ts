import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female']
  signupForm: FormGroup
  forbiddenUsernames = ['Tris', 'Ana']

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.nameIsForbidden.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this))
      }),
      'gender': new FormControl('male', Validators.required),
      'secret': new FormControl('pet', Validators.required),
      'hobbies': new FormArray([], Validators.required),
    })
    this.signupForm.valueChanges.subscribe((value)=>{
      console.log(value)
    })
    this.signupForm.patchValue({'gender': 'female'})
  }

  onSubmit() {
    this.signupForm
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  nameIsForbidden(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }
    return null
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          res({ 'emailIsForbidden': true })
        } else {
          res(null)
        }
      }, 1500)
    })
  }
}
