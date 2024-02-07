/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

let patients = [
  {
    name: 'Kauan',
    age: 20,
    weight: 74,
    height: 1.75,
  },
  {
    name: 'Fernando',
    age: 20,
    weight: 74,
    height: 1.80,
  },
  {
    name: 'Luiza',
    age: 20,
    weight: 74,
    height: 1.60,
  }
];

for (let number of patients) {
  console.log(number)
}