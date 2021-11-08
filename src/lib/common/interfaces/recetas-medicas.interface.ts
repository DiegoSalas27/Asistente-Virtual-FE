export interface IReceraMedica {
	id: number;
	codigo: string;
	paciente: string;
	created_date: string;
	medicamentos: string;
}

export interface Producto {
	nombre: string;
	indicacion: string;
}

export interface IRecetaMedicaDetail {
	id: number;
	especialidad: string;
	paciente: string;
	fecha: string;
	productos: Producto[];
}
