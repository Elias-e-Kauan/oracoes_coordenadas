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
        opC = false,
        opD = false,
        opE = true,
    ]

    var pontuacao = 0
    var justificar = document.getElementById('justificativa')

    if (document.getElementById("opcaoA").checked && opA == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa A está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: A oração acima é uma oração coordenada conclusiva pois expressa a ideia de conclusão, sendo que as conjunções mais utilizadas são: pois, consequentemente, logo, assim, portanto, por fim, então.'
        'A conjunção “contudo” é utilizada em orações coordenadas adversativas que expressam a ideia de oposição.'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa B está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: A oração acima é uma oração coordenada conclusiva pois expressa a ideia de conclusão, sendo que as conjunções mais utilizadas são: pois, consequentemente, logo, assim, portanto, por fim, então.'
        'A conjunção “contudo” é utilizada em orações coordenadas adversativas que expressam a ideia de oposição.'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa C está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: A oração acima é uma oração coordenada conclusiva pois expressa a ideia de conclusão, sendo que as conjunções mais utilizadas são: pois, consequentemente, logo, assim, portanto, por fim, então.'
        'A conjunção “contudo” é utilizada em orações coordenadas adversativas que expressam a ideia de oposição.'
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: A oração acima é uma oração coordenada conclusiva pois expressa a ideia de conclusão, sendo que as conjunções mais utilizadas são: pois, consequentemente, logo, assim, portanto, por fim, então.'
        'A conjunção “contudo” é utilizada em orações coordenadas adversativas que expressam a ideia de oposição.'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa E está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra E. Justificativa: A oração acima é uma oração coordenada conclusiva pois expressa a ideia de conclusão, sendo que as conjunções mais utilizadas são: pois, consequentemente, logo, assim, portanto, por fim, então.'
        'A conjunção “contudo” é utilizada em orações coordenadas adversativas que expressam a ideia de oposição.'
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
    }
}