export interface IRecetaMedica {
  id?:number;
  code: string;
  medications: string;
  patient: string;
  created_date?: string;
  entity?: string;
}