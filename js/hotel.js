// Realizar la petición - Hotel
var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8080/api/hoteles', true);
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var hoteles = JSON.parse(request.responseText);

        // Generar filas de la tabla con los datos obtenidos
        var tablaBody = document.getElementById('tablaHoteles').getElementsByTagName('tbody')[0];
        for (var i = 0; i < hoteles.length; i++) {
            var hotel = hoteles[i];

            // Crear una nueva fila
            var fila = tablaBody.insertRow();

            // Insertar celdas con los valores correspondientes
            fila.insertCell().textContent = hotel.nombre;
            fila.insertCell().textContent = hotel.calificacion;
            fila.insertCell().textContent = hotel.direccion.pais.nombre + ', ' + hotel.direccion.provincia.nombre + ', ' + hotel.direccion.departamento.nombre;
            fila.insertCell().textContent = hotel.createAt;
        }
    } else {
        console.error('Error al realizar la petición');
    }
};
request.onerror = function () {
    console.error('Error al realizar la petición');
};
request.send();
