import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit{

  inputForm !: FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    
    this.inputForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      emailAddress : ['', Validators.required]
    })
  }
 
}
