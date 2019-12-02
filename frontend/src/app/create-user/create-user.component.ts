import { Component, OnInit } from '@angular/core';
import { User } from '../Types/user';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

enum CheckBoxType { MALE, FEMALE, NONE };

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  check_box_type = CheckBoxType;
  currentlyChecked: CheckBoxType;

  registerForm: FormGroup;
  submitted = false;

  user: User = new User(null,"","","",0,0,0);
  message: any;
  constructor(private service: UserService, private formBuilder: FormBuilder) { }
   newUser: any  = {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', Validators.required],
      age: ['', Validators.required],
  });
  this.newUser = {}
  }

  public createUserComponent() {
    this.submitted = true;
 
    if (this.registerForm.invalid) {
        return;
    } 
     this.newUser = { 
      name: this.registerForm.value.name as string,
      lastname: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      dni: this.registerForm.value.dni,
      age: this.registerForm.value.age,
      gender: this.user.gender
    }

    const resp = this.service.createUserService(this.newUser).subscribe();
    if (resp) {
      this.message = 'Añadido correctamente!';
    } else {
      this.message = 'Ocurrio un error ...';
    }
  }

  selectCheckBox(targetType: CheckBoxType) {
    if (this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }
    this.user.gender = targetType.valueOf();
    this.currentlyChecked = targetType;
  }
}
