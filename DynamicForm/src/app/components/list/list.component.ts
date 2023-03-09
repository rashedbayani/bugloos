import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ColumnDef, FormFieldConfig } from 'src/app/models/general.model';
import { FormsService } from 'src/app/services/forms.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    private formsService: FormsService,
    private dialog: MatDialog,
  ){
    this.formsService.formData.subscribe(res => {
      this.listData = res;
      this.table?.renderRows()
    })
    this.formsService.formConfig.subscribe(res => {
      this.formConfig = res
      this.createTableColumns(res)
    })
  }

  formConfig: FormFieldConfig[]
  listData: any[];
  columns: ColumnDef[];
  displayedColumns: string[]

  ngOnInit(): void{
  }

  createTableColumns(config: FormFieldConfig[]){
    this.columns = config.map(item => {
      return {
        fieldName: item.fieldName,
        displayName: item.displayName,
        format: item.format
      }
    })
    this.displayedColumns = this.columns.map(item => item.fieldName).filter(item => item != 'accept' && item != 'dor')
    this.displayedColumns.push('actions')
  }

  editData(row: any, index: number){    
    let rowData = row;
    rowData['index'] = index
    let formDialog = this.dialog.open(FormComponent, {
      data: {
        config: this.formConfig,
        formData: rowData
      }
    })
    formDialog.afterClosed().subscribe(res => {
      if(res) this.formsService.updateRow(res.index, res.data);
      
    })
  }

  deleteRow(index: number){
    this.formsService.deleteRow(index);
  }

  checkEdit(){
    return this.formsService.isAllowedToEdit()
  }

  checkDelete(){
    return this.formsService.isAllowedToDelete()
  }

}
