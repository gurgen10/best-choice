import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

import {ValidatorHelper} from '../../core/helpers/validator.helper'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public contactUsForm: FormGroup;

  constructor() {
    this.contactUsForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.pattern(ValidatorHelper.nameRegEx), Validators.minLength(2), Validators.maxLength(12)]),
      'surname': new FormControl('', [Validators.required, Validators.pattern(ValidatorHelper.nameRegEx), Validators.minLength(2), Validators.maxLength(12)]),
      'email': new FormControl('', [Validators.required, Validators.pattern(ValidatorHelper.emailRegEx)]),
      'phones': new FormArray([new FormControl('+374')]),
      'subject': new FormControl('', [Validators.required, Validators.minLength(7)]),
    })
  }

  public validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
}

  ngOnInit() {
    console.log(this.contactUsForm.controls["name"])
  }

  public submitContactForm(): void {

    if(this.contactUsForm.invalid){
      this.validateAllFormFields(this.contactUsForm);
    } else {
      console.log(this.contactUsForm.getRawValue());
      this.contactUsForm.reset();  
    }
  }

  public addPhoneControl(): void {
    const phoneControls = (<FormArray>this.contactUsForm.controls['phones'].controls);

    if(phoneControls.length < 4) {
      phoneControls.push(new FormControl('+374'));
    }
  }

}
