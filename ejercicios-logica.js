/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */

function miFuncion(cadena) {
  return cadena.length; //! => este metodo me devuelve la longitud de cadena o numeros.
}

console.log(miFuncion("Hola Mundo"));

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

function miFuncionOne(texto) {
  return texto.slice(0, 4); //! este metodo extrae una seccion de una cadena y devuelve una cadena nueva.
}

console.log(miFuncionOne("Hola Mundo"));

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
     miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

function miFunctionTwo(str) {
  return str.split(" "); //! => este metodo divide un objeto de tipo string en un array de cadenas mediante la separacion de la cadena en subcadenas.
}

console.log(miFunctionTwo("hola que tal", " "));

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

function miFuncionThree(caracter) {
  return (caracter + " ").repeat(3);
}

console.log(miFuncionThree("Hola mundo", 3));

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

function invertirTexto(invertir) {
  return invertir.split("").reverse().join("");
}

console.log(invertirTexto("Hola Mundo"));

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

function repetirPalabras(texto, palabra) {
  let palabras = texto.split(" ");
  let contador = 0;

  for(let i = 0; i < palabra.length; i++){
    if(palabras[i] === palabra){
      contador++
    }
  }
  return contador
}
console.log(repetirPalabras("hola mundo adios mundo", "mundo"));
