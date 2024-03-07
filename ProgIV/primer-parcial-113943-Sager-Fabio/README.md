[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/73wC6jKf)
# Proceso de reserva

El sistema contará con tres pasos para realizar el proceso de reserva de un vuelo, hotel y confirmación de la misma.

## Selección de Vuelo

El primer paso consta de listar los aviones en base al listado proporcionado en el servicio de vuelos que muestra:

![image](https://github.com/forstarwars/booking-process/assets/146455539/6e4091f2-9733-44f5-9174-b97ef311e398)


    * Logo empresa
    * Ciudad destino
    * Pais destino
    * Precio
    * Fecha y hora despegue (formato: Mes, Dia, Año, Hora)
    * Fecha y hora aterrizaje (formato: Mes, Dia, Año, Hora)

Aquí el usuario podrá seleccionar un vuelo lo cual lo llevará a la siguiente pantalla en la cual se deben mostrar todas las habitaciones disponibles para el destino seleccionado (existe una variable que asocia los identificadores de los destinos tanto para los vuelos como para los hoteles).

## Selección de Habitación

![image](https://github.com/forstarwars/booking-process/assets/146455539/ff1c0bb5-1074-4b48-8522-c34c0d953d69)


- En esta sección podrá ver:
    * Foto
    * Hotel (mayusculas) - Tipo habitación => ej: PALLADIUM - Habitación Simple
    * Descripción
    * Cantidad de Revisiones
    * Servicios
Dicha información debe ser obtenida desde el servicio de hoteles. Cada habitación podrá seleccionarse por medio de un botón.

## Checkout
Una vez elegida la habitación el sistema debe mostrar el último paso para cargar la información donde se visualizará:

![image](https://github.com/forstarwars/booking-process/assets/146455539/dee531c3-f9c4-4c47-ab90-53963de7b055)

  * Resumen reserva:
    - Información vuelo:
      * Logo empresa
      * Ciudad origen - Ciudad destino
      * Duración viaje
      * Hora vuelo ida + Ciudad origen
      * Hora vuelo vuelta + Ciudad Destino
    - Información habitación
      * Foto
      * Hotel
      * Tipo habitacion
      * Servicios
  * Formulario información personal
    - Nombre (requerido, maxLenght: 50)
    - Apellido (requerido, maxLenght: 50)
    - Tipo documento (requerido, select)
        => DNI - Pasaporte 
    - Numero documento (requerido, numerico)
    - Dirección (requerido, maxLenght: 500)
    - Pais (requerido, maxLenght: 100)
    - Ciudad (requerido, maxLenght: 100)
  * Formulario pago tarjeta
    - Tipo tarjeta (credito, debito)
    - Nombre titular (requerido, maxLenght: 12)
    - Numero tarjeta (requerido, validar formato: XXXX-XXXX-XXXX-XXXX)
    - Expiración (requerido, maxLenght: 4)
    - CCV (requerido, maxLenght: 3, password)

Una vez que el usuario completó todos los datos para que el formulario sea válido se debe realizar una validación adicional que el hotel esté disponible por medio de la propiedad disponible en las habitaciones.

En caso de que todo lo mencionado anteriormente sea correcto se debe mostrar un mensaje con un alert informando al usuario que la operación se realizó con exito y que se realizó el cobro por el Monto Total = Precio Vuelo + Precio Habitación.

Solo se debe mostrar un paso a la vez a medida que el usuario va seleccionando el producto deseado.

## Notas:
  - Utilizar servicios
  - Utilizar comunicación entre componentes según lo requiera
  - Utilizar Template Driven Forms mostrando validaciones especificas en donde corresponda.
  - Utilizar bootstrap para el diseño propuesto

## Uso de iconos
Para usar iconos se pueden instalar la siguiente libreria de bootstrap:

**bootstrap-icons => version: 1.11.1**

Recordar que deben referenciar el archivo CSS generado en el archivo **styles.css** de la siguiente forma:

<code>@import "~bootstrap-icons/font/bootstrap-icons.css";</code>

En caso de necesitar más información pueden visitar el paquete desde https://icons.getbootstrap.com/

## Snippet HTML Resumen Reserva:

```
  <div class="card my-3">
    <h4>Booking detail</h4>
    <div class="row my-3">
        <div class="col-6 separator">
            <h6>Your flight</h6>
            <div class="row">
                <div class="col-5">
                    <img src="..." alt="..." />
                </div>
                <div class="col-7 d-flex">
                    <ul class="list-group list-group-flush w-100">
                        <li>
                            <p><strong>Chicago to New York</strong></p>
                        </li>
                        <li>
                            <p><span>2hs 40mins</span></p>
                        </li>
                        <li>
                        <i class="bi bi-airplane"></i>
                        <span>
                            <p><strong>18:30</strong></p>
                            <p class="secondary">Chicago</p>
                        </span>
                        <i class="bi bi-airplane rotate"></i>
                        <span>
                            <p><strong>21:10</strong></p>
                            <p class="secondary">New York</p>
                        </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-6">
        <h6>Your room</h6>
        <div class="row">
            <div class="col-5">
                <img src="..." alt="..." />
            </div>
            <div class="col-7">
                <p><strong>AMERICAN</strong></p>
                <p><strong>Single Room</strong></p>
                <div class="d-flex">
                    <div class="amenity">
                    <i class="bi bi-tv"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
```
