import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    //this.setChangeValidate()
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      /*'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'password': [null, [Validators.required, this.checkPassword]],*/
      'email': [null],
      'password': [null],
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate')!?.valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name')!.setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('name')!.setValidators(Validators.required);
        }
        this.formGroup.get('name')!.updateValueAndValidity();
      }
    )
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  checkPassword(control: { value: any; }) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkInUseEmail(control: any) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    
  }

  getErrorEmail() {
    return this.formGroup.get('email')!.hasError('required') ? 'Email is required' :
      this.formGroup.get('email')!.hasError('pattern') ? 'Must be a valid email' :
        this.formGroup.get('email')!.hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password')!.hasError('required') ? 'Password is required' :
      this.formGroup.get('password')!.hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }
  
  accueil() {
    // this.router.navigate(['./'])
  }
 

}
