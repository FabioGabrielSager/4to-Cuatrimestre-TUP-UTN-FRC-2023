
# Examen Final DABD - 04/12/2023

## Pantalla Listado Yerbas

Mostrar un listado de las yerbas cargadas en el sistema al iniciar la aplicación.

- Se debe hacer un pipe para mostrar la informacion de los detalles de las yerbas con el siguiente formato: Tipo - Precio
- El ID no se tiene que mostrar
- El codigo de la yerba debe estar en negrita

Agregar un botón para cargar una nueva yerba, el mismo debe estar arriba a la derecha de la pantalla del listado.
El boton debe dirigir a la pantalla Nueva Yerba.

### Endpoint GET Herbs(api/herb)
```
[
  {
    "id": 1,
    "name": "Caballo Negro",
    "description": null,
    "code": "YCN12KK",
    "countryOriginName": "Argentina",
    "stateOriginName": "Misiones",
    "herbDetails": [
      {
        "price": 900,
        "herbTypeName": "Organica",
        "quantity": 2,
        "weight": 10
      }
    ]
  }
]
```

## Pantalla Nueva Yerba

Confeccionar un formulario reactivo que permita al usuario cargar la información de una nueva yerba:

Nombre (name): requerido - 200 caracteres como máximo.
Codigo (code): requerido - 10 caracteres como máximo.
Descripción (description): 1000 caracreres como máximo.
Pais (countryId): requerido
Provincia (stateId): requerido
Detalles (herbDetails): requerido, al menos 1 cargado.

Dentro de los detalles tenemos las siguientes validaciones:
	Tipo yerba (herbTypeId): requerido.
	Cantidad (quantity): requerido, mayor a 0.
	Precio (price): requerido.
	Peso (weight): opcional
	
El pais debe ser cargado con la información del siguiente endpoint:

### Endpoint GET Countries(api/country)
```
[
  {
    "id": 1,
    "name": "Argentina"
  },
  {
    "id": 2,
    "name": "Uruguay"
  }
]
```

La provincia debe ser cargada en base al pais seleccionado con el siguiente endpoint:

### Endpoint GET States(api/country/{country_id}/states)
```
[
  {
    "id": 1,
    "name": "Cordoba"
  },
  {
    "id": 2,
    "name": "Misiones"
  },
  {
    "id": 3,
    "name": "Corrientes"
  }
]
```

Validar que el código ingresado no exista para otra yerba previamente guardada, para dicha validación se debe usar el endpoint:
### Endpoint GET Herb By Code(api/herb/code/{code})
```
true/false
```

Debe contar con un botón para guardar y otro para cancelar el cual vuelve a la pagina del listado. En caso de guardar correctamente en la API debe volver al listado, de lo contrario informar al usuario los errores en los datos. No se debe permitir guardar al usuario si el formulario es inválido.

Endpoint para guardar Yerbas:

### Endpoint POST(api/herb)
```
{
  "id": 0,
  "name": "string",
  "description": "string",
  "code": "string",
  "countryId": 0,
  "stateId": 0,
  "herbDetails": [
    {
      "herbTypeId": 0,
      "price": 0,
      "quantity": 0,
      "weight": 0
    }
  ]
}
```

## Puntos
- Routing (1)
- Listado (2)
- Formulario Reactivo (3)
- Validaciones regulares (2)
- Validación asincronica (1)
- Estilos (1)

**La comunicación con la API es requerida para poder aprobar el exámen.**

## URL API

https://herb.nhorenstein.com/swagger
