import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from 'src/app/models/general.model';
@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styles: [],
})
export class TextInputComponent implements OnInit {
  field: FormFieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}