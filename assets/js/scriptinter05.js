var exerciseBox = document.getElementById('exercise')
var main = document.getElementById('inter5main')
function proxPagina() {
    var confirmAdvance = confirm("Você quer mesmo avançar para a próxima questão? (Ação sem retorno)")
    if (confirmAdvance == true) {
        window.location = "../../pages/finalPage/intermediate-finalPage.html"
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
        pontuacao = pontuacao + 15
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra B. Justificativa: Quanto às alternativas restantes: <br>a) Concessão é sinônimo de permissão. As orações que trazem essa ideia são subordinadas (orações subordinadas adverbiais concessivas), mas no caso acima a oração é coordenada. <br>c) O conectivo "que" não traz a ideia de soma. Exemplos de conectivos que fazem esse papel são: e, mas também, nem. <br>d) O conectivo "que" não traz a ideia de contraste. Exemplos de conectivos que fazem esse papel são: contudo, entretanto, todavia. <br>e) O conectivo "que" não traz a ideia de conclusão.Exemplos de conectivos que fazem esse papel são: então, logo, portanto.`
        exerciseBox.style.height = '1020px'
        justificar.style.textAlign = "justify"
        main.style.height = '120vh'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa B está correta.'
        justificar.style.textAlign = "center"
        exerciseBox.style.height = '855px'
        pontuacao = pontuacao + 15
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra B. Justificativa: Quanto às alternativas restantes: <br>a) Concessão é sinônimo de permissão. As orações que trazem essa ideia são subordinadas (orações subordinadas adverbiais concessivas), mas no caso acima a oração é coordenada.<br> c) O conectivo "que" não traz a ideia de soma. Exemplos de conectivos que fazem esse papel são: e, mas também, nem.<br> d) O conectivo "que" não traz a ideia de contraste. Exemplos de conectivos que fazem esse papel são: contudo, entretanto, todavia.<br> e) O conectivo "que" não traz a ideia de conclusão.Exemplos de conectivos que fazem esse papel são: então, logo, portanto.`
        exerciseBox.style.height = '1020px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa C está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 15
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra B. Justificativa: Quanto às alternativas restantes:<br> a) Concessão é sinônimo de permissão. As orações que trazem essa ideia são subordinadas (orações subordinadas adverbiais concessivas), mas no caso acima a oração é coordenada.<br> c) O conectivo "que" não traz a ideia de soma. Exemplos de conectivos que fazem esse papel são: e, mas também, nem.<br> d) O conectivo "que" não traz a ideia de contraste. Exemplos de conectivos que fazem esse papel são: contudo, entretanto, todavia.<br> e) O conectivo "que" não traz a ideia de conclusão.Exemplos de conectivos que fazem esse papel são: então, logo, portanto.`
        exerciseBox.style.height = '1020px'
        justificar.style.textAlign = "justify"
        main.style.height = '120vh'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 15
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra B. Justificativa: Quanto às alternativas restantes:<br> a) Concessão é sinônimo de permissão. As orações que trazem essa ideia são subordinadas (orações subordinadas adverbiais concessivas), mas no caso acima a oração é coordenada.<br> c) O conectivo "que" não traz a ideia de soma. Exemplos de conectivos que fazem esse papel são: e, mas também, nem.<br> d) O conectivo "que" não traz a ideia de contraste. Exemplos de conectivos que fazem esse papel são: contudo, entretanto, todavia.<br> e) O conectivo "que" não traz a ideia de conclusão.Exemplos de conectivos que fazem esse papel são: então, logo, portanto.`
        exerciseBox.style.height = '1020px'
        justificar.style.textAlign = "justify"
        main.style.height = '120vh'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa E está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 15
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra B. Justificativa: Quanto às alternativas restantes:<br> a) Concessão é sinônimo de permissão. As orações que trazem essa ideia são subordinadas (orações subordinadas adverbiais concessivas), mas no caso acima a oração é coordenada.<br> c) O conectivo "que" não traz a ideia de soma. Exemplos de conectivos que fazem esse papel são: e, mas também, nem.<br> d) O conectivo "que" não traz a ideia de contraste. Exemplos de conectivos que fazem esse papel são: contudo, entretanto, todavia.<br> e) O conectivo "que" não traz a ideia de conclusão.Exemplos de conectivos que fazem esse papel são: então, logo, portanto.`
        exerciseBox.style.height = '1020px'
        justificar.style.textAlign = "justify"
        main.style.height = '120vh'
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
        justificar.style.textAlign = "center"
        exerciseBox.style.height = '855px'
    }
    document.getElementById('score').getElementsByTagName('p')[0].textContent = '0' + pontuacao;
}