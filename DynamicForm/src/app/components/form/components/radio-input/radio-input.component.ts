import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from 'src/app/models/general.model';
import {  } from 'src/app/services/forms.service';
@Component({
  selector: 'radio-input',
  templateUrl: './radio-input.component.html',
  styles: [],
})
export class RadioInputComponent implements OnInit {
  field: FormFieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}