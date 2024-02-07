// criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:
// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:
//Crie uma **função** que irá calcular a média das notas de cada aluno;
//Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
/*
- [x]  Criar lista de estudantes
            Deve conter: nome, nota 1, nota 2
- [x]  Função que calcula a média das notas
- [x]  Se a média for maior que 7 o aluno passa, caso contrario não passa
*/

let students = [
    {
        name: 'Kauan',
        noteOne: 8,
        noteTwo: 8,
    },
    {
        name: 'João',
        noteOne: 6,
        noteTwo: 7,
    },
    {
        name: 'Ziza',
        noteOne: 4,
        noteTwo: 5,
    },
];

function somaDaMedia(student) {
    const finalNote = (student.noteOne + student.noteTwo) / 2
    return {
        finalNote: finalNote
    }
}

for (let index in students) {
    const student = students[index];
    const studentFinalNote = somaDaMedia(student).finalNote;
    if (studentFinalNote >= 7) {
        alert(`O aluno ${student.name} está aprovado com nota ${studentFinalNote}`)
    } else {
        alert(`O aluno(a) ${student.name} foi reprovado(a) com nota ${studentFinalNote}`)
    }
}
