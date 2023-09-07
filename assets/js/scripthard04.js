var exerciseBox = document.getElementById('exercise')
function proxPagina() {
    var confirmAdvance = confirm("Você quer mesmo avançar para a próxima questão? (Ação sem retorno)")
    if (confirmAdvance == true) {
        window.location = "../../pages/hard/hardQ05.html"
    }
}
function verificar() {
    var respostas = [
        opA = false,
        opB = true,
        opC = false,
        opD = false,
        opE = false,
    ]

    var pontuacao = 0
    var justificar = document.getElementById('justificativa')

    if (document.getElementById("opcaoA").checked && opA == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa A está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 20
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: A conjunção "porém" traz a ideia de oposição: Os dados de 2008 são elevados, no entanto, são menores dos de 1992, ou seja, houve melhoria.'
        exerciseBox.style.height = '700px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa B está correta.'
        justificar.style.textAlign = "center"
        exerciseBox.style.height = '660px'
        pontuacao = pontuacao + 20
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: A conjunção "porém" traz a ideia de oposição: Os dados de 2008 são elevados, no entanto, são menores dos de 1992, ou seja, houve melhoria.'
        exerciseBox.style.height = '700px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa C está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 20
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: A conjunção "porém" traz a ideia de oposição: Os dados de 2008 são elevados, no entanto, são menores dos de 1992, ou seja, houve melhoria.'
        exerciseBox.style.height = '700px'
        justificar.style.textAlign = "justify"
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 20
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: A conjunção "porém" traz a ideia de oposição: Os dados de 2008 são elevados, no entanto, são menores dos de 1992, ou seja, houve melhoria.'
        exerciseBox.style.height = '700px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa E está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 20
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: A conjunção "porém" traz a ideia de oposição: Os dados de 2008 são elevados, no entanto, são menores dos de 1992, ou seja, houve melhoria.'
        exerciseBox.style.height = '700px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
        justificar.style.textAlign = "center"
        exerciseBox.style.height = '660px'
    }
    document.getElementById('score').getElementsByTagName('p')[0].textContent = '0' +  pontuacao;
}