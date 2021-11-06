export interface IOrder {
  id: number;
  code: string;
  drugstore: string;
  medications: string;
  patient?: string;
  created_date: string;
}
