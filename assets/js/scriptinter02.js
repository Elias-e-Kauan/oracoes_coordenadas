function verificar() {
    const Div = document.querySelector('main>form>div#exercise');
    const botaoAumentar = document.getElementById('verificar');
    botaoAumentar.addEventListener('click', () => {
        Div.style.width = '1000px'
        Div.style.height = '850px'
    });
    var respostas = [
        opA = false,
        opB = false,
        opC = true,
        opD = false,
        opE = false,
    ]

    var pontuacao = 0


    if (document.getElementById("opcaoA").checked && opA == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa A está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra C. Justificativa: A alternativa acima é composta por três orações (Meu paciente não tem apetite, / vontade de sair, / interagir com as pessoas.). Todas elas estão ligadas entre si, sem que recorram a nenhuma conjunção. Assim, estamos diante da única oração coordenada assindética do exercício.'
        'As alternativas restantes recorrem às seguintes conjunções:'
        'a) Meu paciente não quer comer nem sair. (nem = e não) - oração coordenada sindética aditiva'
        'b) Fala, fala e não diz nada. - oração coordenada sindética adversativa'
        'd) Estou me sentindo melhor, portanto vou trabalhar. - oração coordenada sindética conclusiva'
        'e) Viajaria, quer fosse permitido, quer não. - oração coordenada sindética alternativa'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa B está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra C. Justificativa: A alternativa acima é composta por três orações (Meu paciente não tem apetite, / vontade de sair, / interagir com as pessoas.). Todas elas estão ligadas entre si, sem que recorram a nenhuma conjunção. Assim, estamos diante da única oração coordenada assindética do exercício.'
        'As alternativas restantes recorrem às seguintes conjunções:'
        'a) Meu paciente não quer comer nem sair. (nem = e não) - oração coordenada sindética aditiva'
        'b) Fala, fala e não diz nada. - oração coordenada sindética adversativa'
        'd) Estou me sentindo melhor, portanto vou trabalhar. - oração coordenada sindética conclusiva'
        'e) Viajaria, quer fosse permitido, quer não. - oração coordenada sindética alternativa'
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa C está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra C. Justificativa: A alternativa acima é composta por três orações (Meu paciente não tem apetite, / vontade de sair, / interagir com as pessoas.). Todas elas estão ligadas entre si, sem que recorram a nenhuma conjunção. Assim, estamos diante da única oração coordenada assindética do exercício.'
        'As alternativas restantes recorrem às seguintes conjunções:'
        'a) Meu paciente não quer comer nem sair. (nem = e não) - oração coordenada sindética aditiva'
        'b) Fala, fala e não diz nada. - oração coordenada sindética adversativa'
        'd) Estou me sentindo melhor, portanto vou trabalhar. - oração coordenada sindética conclusiva'
        'e) Viajaria, quer fosse permitido, quer não. - oração coordenada sindética alternativa'
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa D está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra C. Justificativa: A alternativa acima é composta por três orações (Meu paciente não tem apetite, / vontade de sair, / interagir com as pessoas.). Todas elas estão ligadas entre si, sem que recorram a nenhuma conjunção. Assim, estamos diante da única oração coordenada assindética do exercício.'
        'As alternativas restantes recorrem às seguintes conjunções:'
        'a) Meu paciente não quer comer nem sair. (nem = e não) - oração coordenada sindética aditiva'
        'b) Fala, fala e não diz nada. - oração coordenada sindética adversativa'
        'd) Estou me sentindo melhor, portanto vou trabalhar. - oração coordenada sindética conclusiva'
        'e) Viajaria, quer fosse permitido, quer não. - oração coordenada sindética alternativa'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa E está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra C. Justificativa: A alternativa acima é composta por três orações (Meu paciente não tem apetite, / vontade de sair, / interagir com as pessoas.). Todas elas estão ligadas entre si, sem que recorram a nenhuma conjunção. Assim, estamos diante da única oração coordenada assindética do exercício.'
        'As alternativas restantes recorrem às seguintes conjunções:'
        'a) Meu paciente não quer comer nem sair. (nem = e não) - oração coordenada sindética aditiva'
        'b) Fala, fala e não diz nada. - oração coordenada sindética adversativa'
        'd) Estou me sentindo melhor, portanto vou trabalhar. - oração coordenada sindética conclusiva'
        'e) Viajaria, quer fosse permitido, quer não. - oração coordenada sindética alternativa'
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
    }
}