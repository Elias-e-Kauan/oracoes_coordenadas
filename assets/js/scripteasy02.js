var exerciseBox = document.getElementById('exercise')
function proxPagina() {
    var confirmAdvance = confirm("Você quer mesmo avançar para a próxima questão? (Ação sem retorno)")
    if (confirmAdvance == true) {
        window.location = "../../pages/easy/easyQ03.html"
    }
}

function verificar() {
    var respostas = [
        opA = false,
        opB = false,
        opC = false,
        opD = false,
        opE = true,
    ]

    var justificar = document.getElementById('justificativa')
    var pontuacao = pontuacao


    if (document.getElementById("opcaoA").checked && opA == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa A está correta.'
        justificar.style.textAlign = "center"
        exerciseBox.style.height = '670px'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: Demoramos para chegar na praia, pois estava muito trânsito. O “pois” é uma conjunção coordenativa explicativa, e não adversativa. Ela é usada para explicar ou justificar algo.'
        'Nas outras alternativas, todas possuem uma conjunção coordenativa adversativa: a) mas b) porém c) no entanto d) contudo'
        exerciseBox.style.height = '510px'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa B está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: Demoramos para chegar na praia, pois estava muito trânsito. O “pois” é uma conjunção coordenativa explicativa, e não adversativa. Ela é usada para explicar ou justificar algo.'
        'Nas outras alternativas, todas possuem uma conjunção coordenativa adversativa: a) mas b) porém c) no entanto d) contudo'
        exerciseBox.style.height = '510px'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa C está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: Demoramos para chegar na praia, pois estava muito trânsito. O “pois” é uma conjunção coordenativa explicativa, e não adversativa. Ela é usada para explicar ou justificar algo.'
        'Nas outras alternativas, todas possuem uma conjunção coordenativa adversativa: a) mas b) porém c) no entanto d) contudo'
        exerciseBox.style.height = '510px'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: Demoramos para chegar na praia, pois estava muito trânsito. O “pois” é uma conjunção coordenativa explicativa, e não adversativa. Ela é usada para explicar ou justificar algo.'
        'Nas outras alternativas, todas possuem uma conjunção coordenativa adversativa: a) mas b) porém c) no entanto d) contudo'
        exerciseBox.style.height = '510px'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa E está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: Demoramos para chegar na praia, pois estava muito trânsito. O “pois” é uma conjunção coordenativa explicativa, e não adversativa. Ela é usada para explicar ou justificar algo.'
        'Nas outras alternativas, todas possuem uma conjunção coordenativa adversativa: a) mas b) porém c) no entanto d) contudo'
        exerciseBox.style.height = '510px'
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
    }

    document.getElementById('score').getElementsByTagName('p')[0].textContent = pontuacao;
}
