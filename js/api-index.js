const url='https://api.giphy.com/v1/gifs/search';
let busqueda="?q=";
const key='&api_key=Qle3foDnjVJpwOXbwq7Z7Mu1NzYMvm1c';
const limite="&limit=10";

let q="";
//let q="cat";


let urlCompleta="";

//urlCompleta = url + busqueda + q + key + limite

const btn = document.getElementById('btn');

btn.onclick = () => {
    q = document.getElementById('busqueda').value;
    urlCompleta = url + busqueda + q + key + limite;
    getData();
}

const getData = async() => {
    
    await fetch(urlCompleta)
        .then((response) => {return response.json();
        })
        .then((giphy) => {console.log(giphy);
    
        for( let i=0; i < giphy.data.lenght; i++) {
            
            const gif = document.createElement('img');
            gif.src = giphy.data[i].images["original"].url;
            gif.className = "mb-3"; /*indicamos estilo*/
            document.getElementById("portfolio").appendChild(gif)
        }
})
}

getData();
