const aplicacion = document.querySelector('.api-container') 

const url = 'https://jsonplaceholder.typicode.com/photos?limit=4'

fetch(url)

.then(resp => resp.json())

.then(data => {
    
    data.forEach(fotoapi => {
        
        console.log(fotoapi.title)
        const parrafo = document.createElement('parrafo')
        parrafo.innerHTML = fotoapi.title
        aplicacion.appendChild(parrafo)

    });
    /*console.log(data)*/
})

.catch(err => console.log(err)) //si la resp de una de las promesas falla captura el error
