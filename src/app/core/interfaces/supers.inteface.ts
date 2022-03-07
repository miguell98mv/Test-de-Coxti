type categoria = 'superherose' | 'villano';
type visibilidad = 'visible' | 'oculto';
type estado = 'habilitado' | 'desabilitado';

export interface Supers {
  id: string;
  nombre: string;
  categoria: categoria;
  visibilidad: visibilidad;
  estado: estado;
}
