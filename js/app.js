var message = prompt("INGRESA UNA FRASE SIN ESPACIOS");// pide al usuario una frase para cifrar
var opcion = parseInt(prompt("Quieres Cifrar1, Decifrar2"));// da la opcion a elegir de cifrar o desifrar

switch (opcion) {// por medio del switch el usuario puede seleccionar cifrar o decifrar
    case 1:
        cipher(message, 33);
        break;
    case 2:
        decipher(message ,33);
        break;
    default:
      alert("Solo se puede seleccionar cifrar o decifrar");

}

function cipher(frase, n){ // función de cifrado
    var str ="";// string para guardar la frase en mayusculas y minusculas
    for (var i= 0; i< frase.length; i++){ // recorre la frase
       var ascciNumber = frase.charCodeAt(i);//busca el codigo ascci de la frase
       var fraseMay= (ascciNumber -65 + n) %26 +65;//  rango de las mayusculas lo guarda en fraseMay
       var fraseMin= (ascciNumber -97 + n) %26 +97;//  rango de las minusculas lo guarda en fraseMin
       if (ascciNumber >= 65 && ascciNumber <=90){ //si el carcater esta entre 65 y 90 es una mayuscula
            str += String.fromCharCode(fraseMay);
       }else if (ascciNumber >= 97 && ascciNumber <= 122){// si el caracter esta entre 97 y 122 es una minuscula
            str += String.fromCharCode(fraseMin);
       }else {
            alert("la frase no debe tener espacios ni numeros") ;// si no pertenece a ninguno de los anteriores es un numero
    }
  }
 alert (str);// regresamos el string encriptado en el codigo ascii
}



  function decipher(frase, n){ // funcion desifrar recibe la frase y n con el valor de 33 por que son los espacios a recorer
      var str ="";// string para guardar la cadena de retorno
      for (var i= 0; i< frase.length; i++){// recorremos nuestra frase
          var ascciNumber = frase.charCodeAt(i);
          var fraseMay= (((ascciNumber +65 - n) %26)+65);//fraseMay se le asigna el rango de las mayusculas
          var fraseMin= (((ascciNumber +85 - n) %26)+97);// fraseMin se le asigna el rango de las minusculas
          if (ascciNumber >= 65 && ascciNumber <=90){ // si esta entre 65 y 90
              str += String.fromCharCode(fraseMay);
          }else if (ascciNumber >= 97 && ascciNumber <=122){
              str += String.fromCharCode(fraseMin);
          }else {
               alert ("INGRESA UNA FRASE SIN ESPACIOS Y SIN NUMEROS");//regresa el mensaje encontrar un espacio o un numero
          }
        }
  alert (str);//devuelve un alert con la frase ya decifrada
      }

//cipher(message, 33); // llamado a la función cipher

//decipher(message, 33);// llamado a la función decipher
