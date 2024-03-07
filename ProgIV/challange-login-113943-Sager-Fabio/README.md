[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/nocx3YP7)
# Enunciado

Desarrollar una pequeña aplicación que ofrezca a los usuarios un formulario para realizar el login y visualizar los menus disponibles que tiene el restaurant.

Al ingresar los datos de la sesión se debería validar por medio de un servicio que las credenciales sean correctas, en este caso se deberá validar que el usuario sea su mail institucional (ej: legajo@frc.utn.edu.ar) y la clave su documento de identidad.
Validaciones formulario:
- Correo electronico: requerido, tipo email
- Clave: requerido, 8 caracteres como minimo
En caso de que las credenciales sean inválidas se debe mostrar un mensaje indicándolo.

Una vez que el usuario ingresó las credenciales correctas se debe mostrar el componente home el cual permite al usuario:
- Cerrar sesion: tiene que mostrar el componente de login nuevamente.
- Usuario logueado: mostrar el email del usuario logueado.
- Listar menús: listar los menús obtenidos desde un servicio.
- Borrar menú: eliminar cada uno de los menús listados, una vez eliminado el mismo no debe verse incluso si el usuario cierra sesion y vuelve a abrirla.

Diagrama componentes:
![image](https://github.com/fpiemontesi/utn-dabd-login-challange-statement/assets/32469880/018882e7-4c13-43ee-a92b-87a78ecab582)

Imagenes de ejemplo:

Pantalla Login:
![image](https://github.com/fpiemontesi/utn-dabd-login-challange-statement/assets/32469880/d7c5744b-9f2b-43ba-b54d-e5fc2d5659d7)

Pantalla Home:
![image](https://github.com/fpiemontesi/utn-dabd-login-challange-statement/assets/32469880/bdc2140e-ade0-4af0-b7e9-724b7ebe4acf)
