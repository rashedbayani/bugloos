import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';
import { FormFieldConfig } from './models/general.model';
import { FormsService } from './services/forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private dialog: MatDialog,
    private formsService: FormsService
  ){
    this.formsService.formData.subscribe(res => {
      this.formData = res
    })
    this.formsService.formConfig.subscribe(res => {
      this.formConfig = res
    })
  }

  formData: any[];
  formConfig: FormFieldConfig[]

  addNew(){
    let formDialog = this.dialog.open(FormComponent, {
      data: {
        config: this.formConfig
      }
    })

    formDialog.afterClosed().subscribe(res => {
      if(res) {
        this.formsService.addNew(res.data)
      }
    })
  }
}
