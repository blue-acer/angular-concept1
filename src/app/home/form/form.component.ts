import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Router } from '@angular/router';
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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required]
    })
  }

  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this.formBuilder.group({
    floatLabel: this.floatLabelControl,
  });

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  emailAddress = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.emailAddress.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailAddress.hasError('email') ? 'Not a valid email' : '';
  }

  addData() {
    if (this.inputForm.valid) {
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
  }
  // checkEmail(email: string): boolean {
  //   let emailExists: boolean = false;
    
  // }
}
