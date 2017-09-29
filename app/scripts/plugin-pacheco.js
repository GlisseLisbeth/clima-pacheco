import mostrarCiudades from './mostrar_ciudades';
import resaltarCiudad from './resaltar_ciudad';

$.fn.pacheco = function(opciones){
  const {ciudades} = opciones;

  mostrarCiudades(ciudades, $(this));
  resaltarCiudad($(this), ciudades);
};