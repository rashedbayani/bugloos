import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormFieldConfig, UserInfo } from '../models/general.model';

@Injectable({
  providedIn: 'root',
})
export class FormsService implements OnInit {
  private listItems: any[] = [];
  private user: UserInfo = {
    username: 'bugloos',
    access: ['create','delete','view']
  };
  public formData = new BehaviorSubject<any[]>(this.listItems);
  public formConfig = new BehaviorSubject<FormFieldConfig[]>([
    {
      fieldName: 'name',
      displayName: 'Name',
      type: 'text',
      mandatory: true
    },
    {
      fieldName: 'age',
      displayName: 'Age',
      type: 'number'
    },
    {
      fieldName: 'phone',
      displayName: 'Phone Number',
      type: 'text',
      mandatory: true,
      validation: '^(+d{1,2}s?)?(?d{3})?[s.-]?d{3}[s.-]?d{4}$',
      description: 'Please enter a 10-digit number',
      format: 'dashSeparated'
    },
    // {
    //   fieldName: 'textArea',
    //   displayName: 'Text Area',
    //   type: 'textarea',
    // },
    {
      fieldName: 'dob',
      displayName: 'Date of Birth',
      type: 'date',
      description: 'please enter a valid date',
      // order: 2
    },
    {
      fieldName: 'dor',
      displayName: 'Date of Registration',
      type: 'date',
      value: new Date(),
      access: ['view'],
    },
    {
      fieldName: 'gender',
      displayName: 'Gender',
      type: 'list',
      options: ['Male', 'Female'],
    },
    {
      fieldName: 'marital',
      displayName: 'Marital Status',
      type: 'radio',
      options: ['Single', 'Married', 'Rather not to say'],
      // order: 1
    },
    {
      fieldName: 'accept',
      displayName: 'I accept all terms and conditions',
      type: 'checkbox',
      mandatory: true
    },
  ]);

  ngOnInit(): void {
    this.formData.subscribe((res) => {
      this.listItems = res;
    });
  }

  addNew(newData: any) {
    this.listItems.push(newData);
    this.formData.next(this.listItems);
  }

  deleteRow(index: number) {
    this.listItems.splice(index, 1);
    this.formData.next(this.listItems);
  }

  updateRow(index: number, newData: any) {
    this.listItems[index] = newData;
    this.formData.next(this.listItems);
  }

  checkAccess(field: FormFieldConfig): boolean {
    if (
      field.access?.includes('view') &&
      !field.access?.includes('create')
    ) {
      return true;
    } else return false;
  }

  isAllowedToEdit(): boolean {  
    if (
      this.user.access?.includes('edit')
    ) {
      return true;
    } else return false;
  }

  isAllowedToDelete(): boolean {
    if (
      this.user.access?.includes('delete')
    ) {
      return true;
    } else return false;
  }
}
