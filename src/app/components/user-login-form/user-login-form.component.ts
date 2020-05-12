import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserLoginForm } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {
  @Output() submittedForm: EventEmitter<UserLoginForm> = new EventEmitter<UserLoginForm>()
  public form: FormGroup;
  public error: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
        username: [ '', Validators.required],
        password: ['', Validators.required]
    })
  }
  submit(form: FormGroup){ 
    if(!form.valid){ 
      this.error = 'Missing fields';
    }
    if( form.valid){
      this.submittedForm.emit(form.value)
    }
  }
}
