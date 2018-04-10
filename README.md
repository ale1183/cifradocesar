## Cifrado cesar
## Descripción
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha

Por ejemplo:

Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

Consideraciones Específicas

 Debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
El usuario no debe poder ingresar un campo vacío o que contenga números.

## Pseudocodigo
1. Ingresar una frasev por medio de un prompt.
2. Preguntar si quieres Cifrar o descifrar.
3. depende de la opción elegida recorrer frase ver si es mayúsculas o minúsculas.
4. ejecutar fórmula.
5. Imprimir el resultado de la frase.

![cifradocesar/assets/image/cifradocesar.png]
