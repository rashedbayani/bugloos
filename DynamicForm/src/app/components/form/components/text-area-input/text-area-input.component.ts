import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from 'src/app/models/general.model';
@Component({
  selector: 'text-area-input',
  templateUrl: './text-area-input.component.html',
  styles: [],
})
export class TextAreaInputComponent implements OnInit {
  field: FormFieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}