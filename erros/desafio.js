const myarray = [1, 2, 3, 4, 5, 6, 7, 8];

function teste(array, number) {
  const referenceError = new Error("ReferenceError");
  const typeError = new Error("TypeError");
  const rangeError = new Error("rangeError");

  if (typeof array === "undefined") throw referenceError;
  if (typeof number === "undefined") throw referenceError;
  if (typeof array != "object") throw typeError;
  if (typeof number != "number") throw typeError;
  if (array.length != number) throw rangeError;
  if (array.length == number) console.log(array);
}

function tryCatchExemplo(array, number) {
  try {
    teste(array, number);
  } catch (error) {
    console.log(error);
  }
}

tryCatchExemplo(myarray, 8);

// solução da professora:

function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError("Envie os parâmetros");
    if (typeof arr !== "object")
      throw new TypeError("Array precisa ser do tipo Object");
    if (typeof num !== "number")
      throw new TypeError("Número precisa ser do tipo Number");
    if (arr.length !== num) throw new RangeError("Tamanho inválido");
    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é um " + e.name);
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este erro é um " + e.name);
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este erro é um " + e.name);
      console.log(e.message);
    } else {
      console.log("Ocorreu um tipo de erro não esperado: " + e);
    }
  }
}

console.log(validaArray([1, 2, 3, 4, 5], 5));
