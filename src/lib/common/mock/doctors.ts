export const columnsPrecipcionList = [
  {
    field: 'id',
    title: 'Id',
    type: 'number'
  },
  {
    field: 'nombres',
    title: 'Nombres',
    type: 'text'
  },
  {
    field: 'especialidad',
    title: 'Especialidad',
    type: 'text'
  },
  {
    field: 'estado',
    title: 'Estado',
    type: 'text'
  },
  {
    field: 'fecha_registro',
    title: 'Fecha registro',
    type: 'text'
  },
]

export const dataSource = {
  listaRecords: [
    {
      id: 1,
      nombres: 'Mariano Melgar',
      especialidad: 'Dermatologo',
      estado: 'Registrado',
      fecha_registro: '10/07/2021'
    },
    {
      id: 2,
      nombres: 'Mariano mar',
      especialidad: 'Cardiologo',
      estado: 'Sin Registrar',
      fecha_registro: ''
    }
  ],
  numeroPaginas: 1,
  totalRecords: 2,
}