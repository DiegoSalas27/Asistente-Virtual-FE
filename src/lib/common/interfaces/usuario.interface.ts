export interface Usuario {
  nombres: string;
  apellidos: string;
  cmp: string;
  rol: "admin" | "doctor";
}