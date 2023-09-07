function verificar() {
    
    var respostas = [
        opA = false,
        opB = false,
        opC = false,
        opD = true,
        opE = false,
    ]

    var pontuacao = 0

    if (document.getElementById("opcaoA").checked && opA == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa A está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra D. Justificativa: As orações coordenadas assindéticas não apresentam nenhum conectivo, enquanto as orações coordenadas sindéticas são sempre ligadas por uma conjunção coordenativa.'
        'Na frase “Cheguei cedo, portanto terei de esperar a escola abrir.”, o “portanto” é uma conjunção coordenativa de conclusão. Logo, essa é uma oração coordenada conclusiva.'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa B está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra D. Justificativa: As orações coordenadas assindéticas não apresentam nenhum conectivo, enquanto as orações coordenadas sindéticas são sempre ligadas por uma conjunção coordenativa.'
        'Na frase “Cheguei cedo, portanto terei de esperar a escola abrir.”, o “portanto” é uma conjunção coordenativa de conclusão. Logo, essa é uma oração coordenada conclusiva.'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa C está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra D. Justificativa: As orações coordenadas assindéticas não apresentam nenhum conectivo, enquanto as orações coordenadas sindéticas são sempre ligadas por uma conjunção coordenativa.'
        'Na frase “Cheguei cedo, portanto terei de esperar a escola abrir.”, o “portanto” é uma conjunção coordenativa de conclusão. Logo, essa é uma oração coordenada conclusiva.'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa D está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra D. Justificativa: As orações coordenadas assindéticas não apresentam nenhum conectivo, enquanto as orações coordenadas sindéticas são sempre ligadas por uma conjunção coordenativa.'
        'Na frase “Cheguei cedo, portanto terei de esperar a escola abrir.”, o “portanto” é uma conjunção coordenativa de conclusão. Logo, essa é uma oração coordenada conclusiva.'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa E está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra D. Justificativa: As orações coordenadas assindéticas não apresentam nenhum conectivo, enquanto as orações coordenadas sindéticas são sempre ligadas por uma conjunção coordenativa.'
        'Na frase “Cheguei cedo, portanto terei de esperar a escola abrir.”, o “portanto” é uma conjunção coordenativa de conclusão. Logo, essa é uma oração coordenada conclusiva.'
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
    }

    document.getElementById('score').getElementsByTagName('p')[0].textContent = pontuacao;
}




function proxPagina() {
    var confirmAdvance = confirm("Você quer mesmo avançar para a próxima questão? (Ação sem retorno)")
    if (confirmAdvance == true) {
        window.location = "../../pages/easy/easyQ02.html"
    }
}