var map = L.map('map').setView([-34.53382, -58.467622], 20);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.53382, -58.467622]).addTo(map)
    .bindPopup('Oficinas de CANVAMA')
    .openPopup();
