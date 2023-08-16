// Realizar la petición - Clientes
var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8080/api/clientes', true);
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var clientes = JSON.parse(request.responseText);

        // Generar filas de la tabla con los datos obtenidos
        var tablaBody = document.getElementById('tablaClientes').getElementsByTagName('tbody')[0];
        for (var i = 0; i < clientes.length; i++) {
            var cliente = clientes[i];

            // Crear una nueva fila
            var fila = tablaBody.insertRow();

            // Insertar celdas con los valores correspondientes
            fila.insertCell().textContent = cliente.nombre;
            fila.insertCell().textContent = cliente.apellido;
            fila.insertCell().textContent = cliente.email;
            fila.insertCell().textContent = cliente.hotel.nombre;
        }
    } else {
        console.error('Error al realizar la petición');
    }
};
request.onerror = function () {
    console.error('Error al realizar la petición');
};
request.send();
