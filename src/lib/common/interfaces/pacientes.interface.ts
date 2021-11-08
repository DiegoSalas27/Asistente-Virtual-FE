export interface CitasMedica {
	id: number;
	doctorId: number;
	pacienteId: number;
	especialidad: string;
	fecha_atencion: string;
	hora_inicio: string;
	hora_fin: string;
}

export interface IPacientes {
	id: number;
	codigoConadis: string;
	nombres: string;
	apellidos: string;
	telefono: string;
	direccion: string;
	fechaNacimiento: string;
	citasMedicas: CitasMedica[];
}