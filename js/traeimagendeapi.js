function cargaImagen(archivo) {
  return new Promise(function(resolve, reject) {
    var img = new Image;
    img.onload = function() { resolve(this) };
    img.onerror = img.onabort = function() { reject("Error Cargando imagen") };
    img.src = "http://www.homit.com.ar:611/api/musuarios/traeimagen?Archivo="+archivo;
  })
}

document.getElementById("lg_01").src="http://200.69.236.66:611/api/musuario/traeimagen?Archivo=LG_01.jpeg";
document.getElementById("lg_02").src="http://200.69.236.66:611/api/musuario/traeimagen?Archivo=LG_02.jpeg";
document.getElementById("lg_03").src="http://200.69.236.66:611/api/musuario/traeimagen?Archivo=LG_03.jpeg";
document.getElementById("lg_04").src="http://200.69.236.66:611/api/musuario/traeimagen?Archivo=LG_04.jpeg";
document.getElementById("vla_01").src="http://200.69.236.66:611/api/musuario/traeimagen?Archivo=VLA_01.jpeg";
document.getElementById("vla_02").src="http://200.69.236.66:611/api/musuario/traeimagen?Archivo=VLA_02.jpeg";
document.getElementById("vla_03").src="http://200.69.236.66:611/api/musuario/traeimagen?Archivo=VLA_03.jpeg";
document.getElementById("vla_04").src="http://200.69.236.66:611/api/musuario/traeimagen?Archivo=VLA_04.jpeg";
document.getElementById("vla_06").src="http://200.69.236.66:611/api/musuario/traeimagen?Archivo=VLA_06.jpeg";
document.getElementById("vla_07").src="http://200.69.236.66:611/api/musuario/traeimagen?Archivo=VLA_07.jpeg";
document.getElementById("vla_08").src="http://200.69.236.66:611/api/musuario/traeimagen?Archivo=VLA_08.jpeg";
document.getElementById("vla_10").src="http://200.69.236.66:611/api/musuario/traeimagen?Archivo=VLA_10.jpeg";

