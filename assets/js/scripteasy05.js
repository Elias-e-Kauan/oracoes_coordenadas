var exerciseBox = document.getElementById('exercise')
function proxPagina() {
    var confirmAdvance = confirm("Você quer mesmo avançar para a próxima questão? (Ação sem retorno)")
    if (confirmAdvance == true) {
        window.location = "../../pages/finalPage/finalPage.html"
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
    var pontuacao = 0


    if (document.getElementById("opcaoA").checked && opA == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa A está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: O “ou” é uma conjunção coordenativa utilizada nas orações coordenadas alternativas que expressam alternância, escolha. '
        exerciseBox.style.height = '500px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa B está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: O “ou” é uma conjunção coordenativa utilizada nas orações coordenadas alternativas que expressam alternância, escolha. '
        exerciseBox.style.height = '500px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa C está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: O “ou” é uma conjunção coordenativa utilizada nas orações coordenadas alternativas que expressam alternância, escolha. '
        exerciseBox.style.height = '500px'
        justificar.style.textAlign = "justify"
        ontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: O “ou” é uma conjunção coordenativa utilizada nas orações coordenadas alternativas que expressam alternância, escolha. '
        exerciseBox.style.height = '500px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa E está correta.'
        exerciseBox.style.height = '460px'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: O “ou” é uma conjunção coordenativa utilizada nas orações coordenadas alternativas que expressam alternância, escolha. '
        exerciseBox.style.height = '500px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
        exerciseBox.style.height = '460px'
        justificar.style.textAlign = "center"
    }
    document.getElementById('score').getElementsByTagName('p')[0].textContent ='0' + pontuacao;
}