import { writable } from "svelte/store"  ;
import type { IDataSource } from '../common/interfaces/grid.interface';
import type { IDoctor } from '../common/interfaces/doctor.interface';

const doctors = writable<IDataSource<IDoctor> | null>(null);

const customDoctorsStore = {
  subscribe: doctors.subscribe,
  setDoctors: (doctorArray: IDataSource<IDoctor>) => {
    doctors.set(doctorArray);
  }
}

export default customDoctorsStore;