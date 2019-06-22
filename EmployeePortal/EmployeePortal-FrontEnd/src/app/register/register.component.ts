import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { RegisterationService } from '../services/registeration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private empRegister: RegisterationService

  ) { }

  ngOnInit() {
    this.employeeDetail();
    
  }

  employeeDetail(){
    this.employeeForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      department:['',Validators.required],
      gender:['', Validators.required],
      dateOfBirth:['',Validators.required],
    })
  }

  onSubmit(){
   console.log(this.employeeForm.value)
  }
  register() {
    console.log("login form values: "+ this.employeeForm.value)
    this.empRegister.registerUser(this.employeeForm.value).subscribe(
      (response) => {
        console.log("succsess", response);
        this.router.navigate(['/showList']);
      }
    )
  

}
}
