/*
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
*/

const person = {
  nome: "Maria",
  idade: 26,
};

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

console.log(calculaIdade.call(person, 3));

console.log(calculaIdade.apply(person, [3]));

// DIFICULTANDO MAIS - OBJETOS DENTRO DE ARRAY

const persons = [
  {
    nome: "Maria",
    idade: 26,
  },
  {
    nome: "André",
    idade: 26,
  },
];

function calculaIdade2(anos) {
  const messages = [];

  for (let person of persons) {
    const { nome, idade } = person;
    messages.push(
      `Daqui a ${anos} anos, ${nome} terá ${idade + anos} anos de idade.`
    );
  }

  return messages;
}

console.log(calculaIdade2.call(persons, 3));
