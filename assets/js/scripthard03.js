var exerciseBox = document.getElementById('exercise')
function proxPagina() {
    var confirmAdvance = confirm("Você quer mesmo avançar para a próxima questão? (Ação sem retorno)")
    if (confirmAdvance == true) {
        window.location = "../../pages/hard/hardQ04.html"
    }
}
function verificar() {
    var respostas = [
        opA = true,
        opB = false,
        opC = false,
        opD = false,
        opE = false,
    ]

    var justificar = document.getElementById('justificativa')
    var pontuacao = 0

    if (document.getElementById("opcaoA").checked && opA == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa A está correta.'
        exerciseBox.style.height = '740px'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 20
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra A. Justificativa: A conjunção "mas" traz a ideia de oposição.<br> Responda: O narrador do texto tinha deixado de ser feliz? A resposta é: Pelo contrário, ele nunca tinha sido feliz.`
        exerciseBox.style.height = '800px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa B está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 20
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra A. Justificativa: A conjunção "mas" traz a ideia de oposição.<br> Responda: O narrador do texto tinha deixado de ser feliz? A resposta é: Pelo contrário, ele nunca tinha sido feliz.`
        exerciseBox.style.height = '800px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa C está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 20
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra A. Justificativa: A conjunção "mas" traz a ideia de oposição.<br> Responda: O narrador do texto tinha deixado de ser feliz? A resposta é: Pelo contrário, ele nunca tinha sido feliz.`
        exerciseBox.style.height = '800px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 20
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra A. Justificativa: A conjunção "mas" traz a ideia de oposição.<br> Responda: O narrador do texto tinha deixado de ser feliz? A resposta é: Pelo contrário, ele nunca tinha sido feliz.`
        exerciseBox.style.height = '800px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa E está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 20
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra A. Justificativa: A conjunção "mas" traz a ideia de oposição.<br> Responda: O narrador do texto tinha deixado de ser feliz? A resposta é: Pelo contrário, ele nunca tinha sido feliz.`
        exerciseBox.style.height = '800px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
        exerciseBox.style.height = '740px'
        justificar.style.textAlign = "center"
    }
    document.getElementById('score').getElementsByTagName('p')[0].textContent = '0' + pontuacao;
}