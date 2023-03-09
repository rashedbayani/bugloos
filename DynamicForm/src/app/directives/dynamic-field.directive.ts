import {
    Directive,
    Input,
    OnInit,
    ViewContainerRef,
  } from '@angular/core';
  import { FormGroup } from '@angular/forms';
import { CheckboxInputComponent } from '../components/form/components/checkbox-input/checkbox-input.component';
import { DateInputComponent } from '../components/form/components/date-input/date-input.component';
import { ListInputComponent } from '../components/form/components/list-input/list-input.component';
import { NumberInputComponent } from '../components/form/components/number-input/number-input.component';
import { RadioInputComponent } from '../components/form/components/radio-input/radio-input.component';
import { TextAreaInputComponent } from '../components/form/components/text-area-input/text-area-input.component';
import { TextInputComponent } from '../components/form/components/text-input/text-input.component';
import { FormFieldConfig } from '../models/general.model';

//   import { InputComponent } from '../input/input.component';
//   import { ButtonComponent } from '../button/button.component';
//   import { SelectComponent } from '../select/select.component';
//   import { DateComponent } from '../date/date.component';
//   import { RadiobuttonComponent } from '../radiobutton/radiobutton.component';
//   import { CheckboxComponent } from '../checkbox/checkbox.component';
  
  const componentMapper: {[key: string]: any} = {
    'text': TextInputComponent,
    'number': NumberInputComponent,
    'textarea': TextAreaInputComponent,
    'date': DateInputComponent,
    'list': ListInputComponent,
    'radio': RadioInputComponent,
    'checkbox': CheckboxInputComponent,
  };
  @Directive({
    selector: '[dynamicField]',
  })
  export class DynamicFieldDirective implements OnInit {
    @Input() field: FormFieldConfig;
    @Input() group: FormGroup;
    componentRef: any;
    constructor(
      private container: ViewContainerRef
    ) {}
    ngOnInit() {
      this.componentRef = this.container.createComponent(componentMapper[this.field.type]);
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;
    }
  }
  