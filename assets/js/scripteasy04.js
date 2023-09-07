var exerciseBox = document.getElementById('exercise')
function proxPagina() {
    var confirmAdvance = confirm("Você quer mesmo avançar para a próxima questão? (Ação sem retorno)")
    if (confirmAdvance == true) {
        window.location = "../../pages/easy/easyQ05.html"
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
        exerciseBox.style.height = '460px'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra A. Justificativa: A alternativa a) não apresenta a ideia de soma e sim de alternância, escolha, sendo, portanto, uma oração coordenada alternativa com presença da conjunção “ora…ora”.<br>Os conectivos mais utilizados nas orações coordenadas aditivas são: e, nem, não só, mas também, mas ainda, como também, bem como.Assim, nas alternativas, temos: b) bem como c) e d) nem e) como também`
        exerciseBox.style.height = '580px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa B está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra A. Justificativa: A alternativa a) não apresenta a ideia de soma e sim de alternância, escolha, sendo, portanto, uma oração coordenada alternativa com presença da conjunção “ora…ora”.<br>Os conectivos mais utilizados nas orações coordenadas aditivas são: e, nem, não só, mas também, mas ainda, como também, bem como. Assim, nas alternativas, temos: b) bem como c) e d) nem e) como também`
        exerciseBox.style.height = '580px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa C está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra A. Justificativa: A alternativa a) não apresenta a ideia de soma e sim de alternância, escolha, sendo, portanto, uma oração coordenada alternativa com presença da conjunção “ora…ora”.<br>Os conectivos mais utilizados nas orações coordenadas aditivas são: e, nem, não só, mas também, mas ainda, como também, bem como.Assim, nas alternativas, temos: b) bem como c) e d) nem e) como também`
        exerciseBox.style.height = '580px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra A. Justificativa: A alternativa a) não apresenta a ideia de soma e sim de alternância, escolha, sendo, portanto, uma oração coordenada alternativa com presença da conjunção “ora…ora”. <br>Os conectivos mais utilizados nas orações coordenadas aditivas são: e, nem, não só, mas também, mas ainda, como também, bem como.Assim, nas alternativas, temos: b) bem como c) e d) nem e) como também`
        exerciseBox.style.height = '580px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa E está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra A. Justificativa: A alternativa a) não apresenta a ideia de soma e sim de alternância, escolha, sendo, portanto, uma oração coordenada alternativa com presença da conjunção “ora…ora”.<br>Os conectivos mais utilizados nas orações coordenadas aditivas são: e, nem, não só, mas também, mas ainda, como também, bem como.Assim, nas alternativas, temos: b) bem como c) e d) nem e) como também`
        exerciseBox.style.height = '580px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
        justificar.style.textAlign = "center"
        exerciseBox.style.height = '460px'
    }
    document.getElementById('score').getElementsByTagName('p')[0].textContent = '0' + pontuacao;
}