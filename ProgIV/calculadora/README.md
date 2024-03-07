# Calculadora

Se debe crear una calculadora que permita realizar las siguientes operaciones:
- Suma
- Resta
- Multiplicacion
- Division
- Potencia
- Raiz

La aplicación deberá contar con un componente encargado de resolver todas las operaciones en base a dos valores de entradas suministrados por el componente padre. Dicho componente deberá emitir un evento con el resultado de la operación al componente padre.
El padre será responsable de guardar los valores y mostrar el resultado de las operaciones realizadas por el componente hijo.


Diseño básico propuesto:
----------------------------------- |
   Resultado: _____________         |
   V1: ______   V2: _______         |
                                    |
    +      -      X     /           |
       ^        Limpiar             |
----------------------------------- |