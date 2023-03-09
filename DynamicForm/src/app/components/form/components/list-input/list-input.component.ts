import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from 'src/app/models/general.model';
import { FormsService } from 'src/app/services/forms.service';
@Component({
  selector: 'list-input',
  templateUrl: './list-input.component.html',
  styles: [],
})
export class ListInputComponent implements OnInit {
  field: FormFieldConfig;
  group: FormGroup;
  constructor(
    private formService: FormsService
  ) {}

  checkAccess(): boolean{
    return this.formService.checkAccess(this.field)
  }
  ngOnInit() {}
}