[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Sekg2Oao)
# Enunciado

El usuario podrá acceder a las distintas funcionalidades por medio de un menu (navbar) que ofrecerá las siguientes caracteristicas:
- Crear Materia
- Inscribir Alumno
- Listar Alumnos Inscriptos por Materia
	
## Atributos Entidades:
- **Materia**
  * nombre
  * cupo
- **Inscripcion**
  * nombre alumno
  * materia
	
## Reglas de negocio:
- El nombre de la materia debe ser requerido y no puede tener más de 50 caracteres.
- El cupo es requerido y debe ser de tipo numérico.
- Se debe validar que la materia no haya sido creada previamente.
- El nombre del alumno es requerido y no debe tener más de 200 caracteres.
- En la inscripción la materia a seleccionar debe ser un combo y es requerida.
- Se debe verificar que la materia tenga cupos suficientes para realizar la inscripción.

## Nota:
- Las validaciones deben mostrarse junto al control que están validando, en caso de haber una validación general mostrarla al final del formulario.
- No se debe utilizar herramientas no vistas durante las clases para resolver el problema.
- Los componentes deben mostrarse y ocultarse a medida que el usuario va cambiando la funcionalidad desde el menú.
- Es necesaria la utilización de servicios.

## Diagrama de componentes:

![image](https://github.com/fpiemontesi/utn-dabd-course-challange-statement/assets/32469880/f72513ac-3dc0-4082-a424-38503d43af0f)

