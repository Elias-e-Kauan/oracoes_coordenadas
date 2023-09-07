var exerciseBox = document.getElementById('exercise')
function proxPagina() {
    var confirmAdvance = confirm("Você quer mesmo avançar para a próxima questão? (Ação sem retorno)")
    if (confirmAdvance == true) {
        window.location = "../../pages/intermediate/intermediateQ03.html"
    }
}
function verificar() {
    var respostas = [
        opA = false,
        opB = false,
        opC = true,
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
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra C. Justificativa: A alternativa acima é composta por três orações (Meu paciente não tem apetite, / vontade de sair, / interagir com as pessoas.). Todas elas estão ligadas entre si, sem que recorram a nenhuma conjunção. Assim, estamos diante da única oração coordenada assindética do exercício.<br> As alternativas restantes recorrem às seguintes conjunções:<br> a) Meu paciente não quer comer nem sair. (nem = e não) - oração coordenada sindética aditiva<br> b) Fala, fala e não diz nada. - oração coordenada sindética adversativa<br> d) Estou me sentindo melhor, portanto vou trabalhar. - oração coordenada sindética conclusiva<br> e) Viajaria, quer fosse permitido, quer não. - oração coordenada sindética alternativa`
        exerciseBox.style.height = '700px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa B está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 15
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra C. Justificativa: A alternativa acima é composta por três orações (Meu paciente não tem apetite, / vontade de sair, / interagir com as pessoas.). Todas elas estão ligadas entre si, sem que recorram a nenhuma conjunção. Assim, estamos diante da única oração coordenada assindética do exercício.<br> As alternativas restantes recorrem às seguintes conjunções:<br> a) Meu paciente não quer comer nem sair. (nem = e não) - oração coordenada sindética aditiva<br> b) Fala, fala e não diz nada. - oração coordenada sindética adversativa<br> d) Estou me sentindo melhor, portanto vou trabalhar. - oração coordenada sindética conclusiva<br> e) Viajaria, quer fosse permitido, quer não. - oração coordenada sindética alternativa`
        exerciseBox.style.height = '700px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa C está correta.'
        justificar.style.textAlign = "center"
        exerciseBox.style.height = '460px'
        pontuacao = pontuacao + 15
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra C. Justificativa: A alternativa acima é composta por três orações (Meu paciente não tem apetite, / vontade de sair, / interagir com as pessoas.). Todas elas estão ligadas entre si, sem que recorram a nenhuma conjunção. Assim, estamos diante da única oração coordenada assindética do exercício.<br> As alternativas restantes recorrem às seguintes conjunções:<br> a) Meu paciente não quer comer nem sair. (nem = e não) - oração coordenada sindética aditiva<br> b) Fala, fala e não diz nada. - oração coordenada sindética adversativa<br> d) Estou me sentindo melhor, portanto vou trabalhar. - oração coordenada sindética conclusiva<br> e) Viajaria, quer fosse permitido, quer não. - oração coordenada sindética alternativa`
        exerciseBox.style.height = '700px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 15
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra C. Justificativa: A alternativa acima é composta por três orações (Meu paciente não tem apetite, / vontade de sair, / interagir com as pessoas.). Todas elas estão ligadas entre si, sem que recorram a nenhuma conjunção. Assim, estamos diante da única oração coordenada assindética do exercício.<br> As alternativas restantes recorrem às seguintes conjunções:<br> a) Meu paciente não quer comer nem sair. (nem = e não) - oração coordenada sindética aditiva<br> b) Fala, fala e não diz nada. - oração coordenada sindética adversativa<br> d) Estou me sentindo melhor, portanto vou trabalhar. - oração coordenada sindética conclusiva<br> e) Viajaria, quer fosse permitido, quer não. - oração coordenada sindética alternativa`
        exerciseBox.style.height = '700px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa E está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 15
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra C. Justificativa: A alternativa acima é composta por três orações (Meu paciente não tem apetite, / vontade de sair, / interagir com as pessoas.). Todas elas estão ligadas entre si, sem que recorram a nenhuma conjunção. Assim, estamos diante da única oração coordenada assindética do exercício.<br> As alternativas restantes recorrem às seguintes conjunções:<br> a) Meu paciente não quer comer nem sair. (nem = e não) - oração coordenada sindética aditiva<br> b) Fala, fala e não diz nada. - oração coordenada sindética adversativa<br> d) Estou me sentindo melhor, portanto vou trabalhar. - oração coordenada sindética conclusiva<br> e) Viajaria, quer fosse permitido, quer não. - oração coordenada sindética alternativa`
        exerciseBox.style.height = '700px'
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