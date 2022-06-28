/*
  1. Crie uma função que recebe o array alunos e um número que irá representar a média final;
  2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
  3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/

let alunos = [
  {
    nome: "Maria",
    media: "7.9",
  },
  {
    nome: "André",
    media: "8",
  },
];

function alunosAprovados(alunos, mediaFinal) {
  let alunosAprovados = [];

  for (const aluno of alunos) {
    const { media, nome } = aluno;
    if (media >= mediaFinal) {
      alunosAprovados.push(nome);
    }
  }

  return alunosAprovados;
}

console.log(alunosAprovados(alunos, 8));

// sem desestruturação

let alunos2 = [
  {
    nome: "Maria",
    media: "7.9",
  },
  {
    nome: "André",
    media: "8",
  },
];

function alunosAprovados2(alunos, mediaFinal) {
  let alunosAprovados = [];

  for (const aluno of alunos) {
    if (aluno.media >= mediaFinal) {
      alunosAprovados.push(aluno.nome);
    }
  }

  return alunosAprovados;
}

console.log(alunosAprovados2(alunos2, 5));
