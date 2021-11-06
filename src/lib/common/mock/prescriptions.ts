export const columnsPrecipcionList = [
  {
    field: 'id',
    title: 'Id',
    type: 'number'
  },
  {
    field: 'codigo',
    title: 'Código',
    type: 'text'
  },
  {
    field: 'medicamentos',
    title: 'Medicamentos',
    type: 'text'
  },
  {
    field: 'paciente',
    title: 'Paciente',
    type: 'text'
  },
  {
    field: 'created_date',
    title: 'Fecha creación',
    type: 'text'
  },
]

export const dataSource = {
  listaRecords: [
    {
      id: 1,
      codigo: 'AV-M-001',
      medicamentos: 'Panadol, ketakonazol, remdesivir',
      paciente: 'Jorge Munoz',
      created_date: '10/07/2021'
    },
    {
      id: 2,
      codigo: 'AV-M-002',
      medicamentos: 'Paracetamol, aciclovir',
      paciente: 'Carla Herrera',
      created_date: '10/08/2021'
    }
  ],
  numeroPaginas: 1,
  totalRecords: 2,
}