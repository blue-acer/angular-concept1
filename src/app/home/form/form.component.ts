import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  inputForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.inputForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      lastName: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      emailAddress: ['', [Validators.required, Validators.email]]
    })
  }

  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this.formBuilder.group({
    floatLabel: this.floatLabelControl,
  });

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  getErrorMessage() {
    if (this.inputForm.controls['emailAddress'].hasError('required')) {
      return 'You must enter a value';
    }

    return this.inputForm.controls['emailAddress'].hasError('email') ? 'Not a valid email' : '';
  }

  addData() {
    //this.checkEmail(this.inputForm.controls['emailAddress'].value);
    //if (this.goodEmail) {
      if(this.inputForm.valid){
        this.api.postData(this.inputForm.value)
        .subscribe({
          next: (res) => {
            alert("Data added succesfully");
            this.router.navigate(['user-info'])
          },
          error: () => {
            alert("Error adding data")
          }
        })
      }
    //}
  }

  // goodEmail!:boolean;
  checkEmail(value:string){
    this.api.getRecord(value)
    .subscribe((res) =>{
      delay(5000);
      if(res.body['length'] === 0){
        //console.log(res.body['length']);       
        //this.goodEmail = true;
        this.addData();
      }
      else{
        alert('The entered email is already registered on our system');
        //this.goodEmail = false;
      }
    })
    //return this.goodEmail;
  }


}
