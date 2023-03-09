import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/form/components/text-input/text-input.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { NumberInputComponent } from './components/form/components/number-input/number-input.component';
import { TextAreaInputComponent } from './components/form/components/text-area-input/text-area-input.component';
import { DateInputComponent } from './components/form/components/date-input/date-input.component';
import { ListInputComponent } from './components/form/components/list-input/list-input.component';
import { RadioInputComponent } from './components/form/components/radio-input/radio-input.component';
import { CheckboxInputComponent } from './components/form/components/checkbox-input/checkbox-input.component';
import { FormsService } from './services/forms.service';
import { FormatPipe } from './pipes/format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    TextInputComponent,
    NumberInputComponent,
    TextAreaInputComponent,
    DateInputComponent,
    ListInputComponent,
    RadioInputComponent,
    CheckboxInputComponent,
    DynamicFieldDirective,
    FormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    FormsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
