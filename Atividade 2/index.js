/**
 * 
 * Solicitar o nome do aluno e suas 3 notas do bimestre.
 * Calcular a média
 * 
 * Se o aluno tirar uma média maior que 7, dar os parabéns
 * caso contrario desejar boa sorte na recuperação.
 * Em ambos os casos mostre o nome do aluno e sua média
 * 
 * 
 */

const studentName = prompt('Digite o nome do(a) aluno(a)')
const n1 = Number(prompt('Nota 1 '))
const n2 = Number(prompt('Nota 2 '))
const n3 = Number(prompt('Nota 3 '))

// Number(n1, n2, n3)

alert('Calculando...')

const average = ((n1 + n2 + n3) / 3)

alert(`${studentName}, sua media foi de ${average.toFixed(1)}`)

function checkAverage(average) {
    if (average >= 6){
        alert('Fri fai ta liberado por 2 meses')
    } else{
        alert('Muito burro mlk kkkkkkkk, reprovou burrao')
    }
}

checkAverage(average)