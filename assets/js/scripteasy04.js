function verificar() {
    const Div = document.querySelector('main>form>div#exercise');
    const botaoAumentar = document.getElementById('verificar');
    botaoAumentar.addEventListener('click', () => {
        Div.style.width = '1000px'
        Div.style.height = '850px'
    });
    var respostas = [
        opA = true,
        opB = false,
        opC = false,
        opD = false,
        opE = false,
    ]

    var pontuacao = 0


    if (document.getElementById("opcaoA").checked && opA == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa A está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra A. Justificativa: A alternativa a) não apresenta a ideia de soma e sim de alternância, escolha, sendo, portanto, uma oração coordenada alternativa com presença da conjunção “ora…ora”.Os conectivos mais utilizados nas orações coordenadas aditivas são: e, nem, não só, mas também, mas ainda, como também, bem como.' 
        'Assim, nas alternativas, temos: b) bem como c) e d) nem e) como também'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa B está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra A. Justificativa: A alternativa a) não apresenta a ideia de soma e sim de alternância, escolha, sendo, portanto, uma oração coordenada alternativa com presença da conjunção “ora…ora”.Os conectivos mais utilizados nas orações coordenadas aditivas são: e, nem, não só, mas também, mas ainda, como também, bem como.' 
        'Assim, nas alternativas, temos: b) bem como c) e d) nem e) como também'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa C está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra A. Justificativa: A alternativa a) não apresenta a ideia de soma e sim de alternância, escolha, sendo, portanto, uma oração coordenada alternativa com presença da conjunção “ora…ora”.Os conectivos mais utilizados nas orações coordenadas aditivas são: e, nem, não só, mas também, mas ainda, como também, bem como.' 
        'Assim, nas alternativas, temos: b) bem como c) e d) nem e) como também'
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa D está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra A. Justificativa: A alternativa a) não apresenta a ideia de soma e sim de alternância, escolha, sendo, portanto, uma oração coordenada alternativa com presença da conjunção “ora…ora”.Os conectivos mais utilizados nas orações coordenadas aditivas são: e, nem, não só, mas também, mas ainda, como também, bem como.' 
        'Assim, nas alternativas, temos: b) bem como c) e d) nem e) como também'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa E está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra A. Justificativa: A alternativa a) não apresenta a ideia de soma e sim de alternância, escolha, sendo, portanto, uma oração coordenada alternativa com presença da conjunção “ora…ora”.Os conectivos mais utilizados nas orações coordenadas aditivas são: e, nem, não só, mas também, mas ainda, como também, bem como.' 
        'Assim, nas alternativas, temos: b) bem como c) e d) nem e) como também'
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
    }
}