function a(n1, n2) {
  console.log(
    `Os números ${n1} e ${n2} ${
      n1 === n2 ? "são" : "não são"
    } iguais. Sua soma é ${n1 + n2}, que é ${
      n1 + n2 > 10 ? "maior" : "menor"
    } que 10 e ${n1 + n2 < 20 ? "menor" : "maior"} que 20`
  );
}

a(10, 30);

function b(n1, n2) {
  const soma = n1 + n2;
  const comparisonNumbers = n1 === n2 ? "são" : "não são";
  const comparisonSum1 = n1 + n2 > 10 ? "maior" : "menor";
  const comparisonSum2 = n1 + n2 < 20 ? "menor" : "maior";

  console.log(
    `Os números ${n1} e ${n2} ${comparisonNumbers} iguais. Sua soma é ${soma}, que é ${comparison1} que 10 e ${comparison2} que 20`
  );
}

b(10, 30);
