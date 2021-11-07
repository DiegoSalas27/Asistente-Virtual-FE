import { writable } from "svelte/store"  ;
import type { IDataSource } from '../common/interfaces/grid.interface';
import type { IReceraMedica } from '../common/interfaces/recetas-medicas.interface';

const recetasMedicas = writable<IDataSource<IReceraMedica> | null>(null);

const customRecetaMedicaStore = {
  subscribe: recetasMedicas.subscribe,
  setRecetasMedicas: (doctorArray: IDataSource<IReceraMedica>) => {
    recetasMedicas.set(doctorArray);
  }
}

export default customRecetaMedicaStore;