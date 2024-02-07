// const sayMyName = (name) => {
//     console.log(name)
// }

// sayMyName('Kauan')


// function sayMyName(name){
//     console.log('Antes de executar a callback func')
//     name()
//     console.log('Depois de executar a callback func')
// }

// sayMyName( () =>{ 
//     console.log('Realizando a callback') 
// })

// function Person(name) {
//     this.name = name
// }

// const kauan = new Person('Kauan')
// const schamber = new Person('Schamber')

// console.log(kauan)
// console.log(schamber)


// let fruit = "banana";
// function getFruit(fruit) {
//   fruit = "orange";
//   return fruit
// }

// console.log(fruit);
// console.log(getFruit(fruit));

/*
let n1 = prompt('Digite um número');
let n2 = prompt('Digite outro número');

const soma = Number(n1) + Number(n2);

alert(`A soma entre ${n1} e ${n2} é ${soma}`)
*/

/*
const soma = function(n1, n2){
    total = n1 + n2
    return total;
}

let n1 = 4
let n2 = 4

soma(n1, n2)

console.log(`A soma entre ${n1} e ${n2} é ${soma(n1, n2)}`)
*/


// const heroi = {
//     nome: 'Hulk',
//     idade: 45,
//     sexo: 'Masculino'
// }


// console.log(heroi)
// console.log(Object.keys(heroi))
// console.log(Object.keys(heroi))
// console.log(Object.values(heroi))


// Calculo de salario de 2 funcionarios

//criação do objeto funcionario com suas respectivas caracteristicas

// const funcionario1 = {
//     nome: 'Kauan',
//     desconto: 0.2,
//     salarioBruto: 2000,
//     salarioLiquido: 0,
// };

// const funcionario2 = {
//     nome: 'Maria',
//     desconto: 0.1,
//     salarioBruto: 2000,
//     salarioLiquido: 0,
// };



// function calcularDesconto(salarioBruto, desconto) {
//     return  salarioBruto - (salarioBruto * desconto)
// }

// funcionario1.salarioLiquido = calcularDesconto ( 
//     funcionario1.salarioBruto,
//     funcionario1.desconto
// )

// funcionario2.salarioLiquido = calcularDesconto ( 
//     funcionario2.salarioBruto,
//     funcionario2.desconto
// )


// console.log(
//     `
//     Funcionario ${funcionario1.nome}: ${funcionario1.salarioLiquido}
//     Funcionario ${funcionario2.nome}: ${funcionario1.salarioLiquido}
//     `
// )