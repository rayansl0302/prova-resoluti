import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    description: ['', Validators.required],
    selection: ['', Validators.required],
    radioOption: [''],
    birthdate: ['', Validators.required],
    password: ['', Validators.required],

  });
  secondFormGroup = this._formBuilder.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
    country: ['', Validators.required],

  });
  thirdFormGroup = this._formBuilder.group({
    occupation: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    website: [''],
    social: ['']
  });
  fourthFormGroup = this._formBuilder.group({
    hobby: [''],
    favoriteColor: [''],
    soccerTeam: [''],
    favoriteFood: ['']
  });
  isLinear = false;
  constructor(private _formBuilder: FormBuilder) { }
}
