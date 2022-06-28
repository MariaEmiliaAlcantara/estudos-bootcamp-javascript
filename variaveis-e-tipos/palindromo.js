function palindromo(normalPhrase) {
  let reversePhrase = normalPhrase;

  reversePhrase = reversePhrase.split("");

  reversePhrase = reversePhrase.reverse();

  reversePhrase = reversePhrase.toString();

  reversePhrase = reversePhrase.replaceAll(",", "");

  reversePhrase = reversePhrase.replaceAll(" ", "");

  if (normalPhrase.replaceAll(" ", "") == reversePhrase) {
    console.log(`a frase "${normalPhrase}" é um palíndromo`);
  } else {
    console.log(`a frase "${normalPhrase}" não é um palíndromo`);
  }
}

palindromo("roma me tem amor");
palindromo("ofjoifjoif");

// FORMA MAIS COMPACTA

function palindromo2(normalPhrase) {
  const reversePhrase = normalPhrase
    .split("")
    .reverse()
    .toString()
    .replaceAll(",", "")
    .replaceAll(" ", "");

  normalPhrase = normalPhrase.replaceAll(" ", "").replaceAll(",", "");

  if (normalPhrase == reversePhrase) {
    console.log(`a frase "${normalPhrase}" é um palíndromo`);
  } else {
    console.log(`a frase "${normalPhrase}" não é um palíndromo`);
  }
}

palindromo2("roma me tem amor");
palindromo2("ofjoifjoif");
