import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from 'src/app/models/general.model';
@Component({
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styles: [],
})
export class NumberInputComponent implements OnInit {
  field: FormFieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}