/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

let patients = [
    {
        name: 'Kauan',
        age: 20,
        weight: 74,
        height: 175,
    },
    {
        name: 'Fernando',
        age: 20,
        weight: 74,
        height: 180,
    },
    {
        name: 'Luiza',
        age: 20,
        weight: 74,
        height: 160,
    }
];

function calcIMC(patients) {
    const calc = patients.weight / ((patients.height / 100) ** 2)

    alert(`O(a) paciente ${patients.name} possui o IMC de: ${calc.toFixed(2)}`)

    console.log(calc.toFixed(2))
};

// let funcIMC = calcIMC(patients[2]);

for (let patient of patients) {
    calcIMC(patient)
}