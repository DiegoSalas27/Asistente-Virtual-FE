export interface IConditionShowGridField {
  field: string;
  value: any;
}

export interface IActionGrid {
  icon: string;
  action?: string;
  fieldReturn?: string;
  tooltip?: string;
  color?: string;
  conditionShow?: IConditionShowGridField;
  select?: string;
  selectSource?: any;
  type: string;
  // method: (id: number, entity: string) => void;
  method: (entity: any) => void;
}

export interface IColumnsGrid {
  field: string;
  title: string;
  type: string;
  align?: "center" | "right" | "left";
  width?: string;
  fontWeight?: "bolder" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | "bold" | "normal";
  color?: String,
}

export interface IConfigGrid {
  pagQuantity?: number;
  getService?: string;
  entity?: string;
  redirect?: string;
  deleteService?: string;
  deleteMessage?: string;
  returnField?: Array<string>;
  valueFilter?: any;
  listItemSelect?: any;
  redirectId?: boolean;
  select?: boolean;
  selectSingle?: boolean
  selectGetObject?: boolean;
  concatenate?: boolean;
  errorConfig?: boolean;
  messageDelete?: string
  bodyStyle?: any
  loadingSync?: any;
  openModal?: boolean;
}

export interface IDataSource<T> {
  listaRecords: T[];
  numeroPaginas: number;
  totalRecords: number;
  totalDb?: number;
}

export interface IGridProps<T> {
  columns: Array<IColumnsGrid>;
  actions: Array<IActionGrid>;
  dataSource: IDataSource<T>;
  create?: () => void;
  rows: number;
} 