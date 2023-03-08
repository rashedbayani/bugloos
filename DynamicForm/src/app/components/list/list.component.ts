import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ColumnDef } from 'src/app/models/general.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit{
  columns: ColumnDef[] = [
    {
      fieldName: 'first',
      displayName: 'First'
    },
    {
      fieldName: 'second',
      displayName: 'Second'
    }
  ];
  listItems: any[];
  displayedColumns = this.columns.map(item => item.fieldName)

  ngOnInit(): void{
    this.listItems = [
      {
        first: 'Rashed',
        second: 'Bayani'
      },
      {
        first: 'Tarashod',
        second: 'Tabayon'
      }
    ]

  }
  
  ngAfterViewInit(): void {
  }

  addNew(){

  }

}
