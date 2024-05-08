interface Cliente {
  idCliente: number;
  nombre: string;
  apellido: string;
  fechaDeNacimiento: Date;
  fkGenero: number;
  telefono: string;
  correo: string;
  fkDireccion: number;
  fechaCreacion: Date | null;
  fechaActualizacion: Date | null;
  fkCreadoPor: number;
  fkActualizadoPor: number;
  fechaEliminacion: Date | null;
  fkEliminadoPor: number | null;
}

export default Cliente;
