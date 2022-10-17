// cambia la descripcion de las fotos por un mail random

let tituloFotos = document.getElementsByClassName('foto-titulo');
let contador = 0;
fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then (json => {
    json.forEach(comentario => {
        tituloFotos[contador].innerText =(comentario.email);
        contador++;
    });
})
.catch (err => console.log(err));