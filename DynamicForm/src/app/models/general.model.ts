export type FieldTypes = 'text' | 'number' | 'textarea' | 'date' | 'daterange' | 'list' | 'radio' | 'checkbox';
export type FormatTypes = 'commaSeparated' | 'dashSeparated';
export type AccessTypes = 'view' | 'create' | 'edit' | 'delete';

export interface UserInfo {
    username: string,
    access: AccessTypes[]
}

export interface ColumnDef {
    fieldName: string,
    displayName: string,
    format?: 'commaSeparated' | 'dashSeparated';
}

export interface FormFieldConfig{
    fieldName: string,
    displayName: string,
    type: FieldTypes,
    description?: string,
    mandatory?: boolean,
    validation?: string,
    format?: FormatTypes,
    access?: AccessTypes[],
    options?: string[],
    value?: any,
    order?: number
}