// Solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [x]  A soma dos dois números;
// - [x]  A subtração dos dois números;
// - [x]  A multiplicação dos dois números;
// - [x]  A divisão dos dois números;
// - [x]  O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀🧑‍🚀

// - [x]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [x]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.



const n1 = Number(prompt('Insira um número: '));
const n2 = Number(prompt('Insira outro número: '));

function numbersResult(n1, n2) {
    const plusSum = n1 + n2;
    const minusSum = n1 - n2;
    const multiplySum = n1 * n2;
    const divisionSum = n1 / n2;
    const restDivSum = n1 % n2;

    return {
        'Sua Soma': plusSum,
        'Sua Subtração': minusSum,
        'Sua Multiplicação': multiplySum,
        'Sua Divisão': divisionSum,
        'O Resto é': restDivSum
    }

}



const result = numbersResult(n1, n2);

switch ((n1 + n2) % 2) {
    case 0:
        alert('A soma dos números é par');
        break;
    case 1:
        alert('A soma dos números é ímpar');
        break;
}

if (n1 === n2) {
    alert('Os números são iguais')
} else {
    alert('Os números são diferentes')
}

for (let sums in result) {
    alert(`${sums}: ${result[sums]}`);
}
