function verificar() {
    const Div = document.querySelector('main>form>div#exercise');
    const botaoAumentar = document.getElementById('verificar');
    botaoAumentar.addEventListener('click', () => {
        Div.style.width = '1000px'
        Div.style.height = '850px'
    });
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
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: Quanto às alternativas restantes:'
        'a) Concessão é sinônimo de permissão. As orações que trazem essa ideia são subordinadas (orações subordinadas adverbiais concessivas), mas no caso acima a oração é coordenada.'
        'c) O conectivo "que" não traz a ideia de soma. Exemplos de conectivos que fazem esse papel são: e, mas também, nem.'
        'd) O conectivo "que" não traz a ideia de contraste. Exemplos de conectivos que fazem esse papel são: contudo, entretanto, todavia.'
        'e) O conectivo "que" não traz a ideia de conclusão.Exemplos de conectivos que fazem esse papel são: então, logo, portanto.'
            pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa B está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: Quanto às alternativas restantes:'
        'a) Concessão é sinônimo de permissão. As orações que trazem essa ideia são subordinadas (orações subordinadas adverbiais concessivas), mas no caso acima a oração é coordenada.'
        'c) O conectivo "que" não traz a ideia de soma. Exemplos de conectivos que fazem esse papel são: e, mas também, nem.'
        'd) O conectivo "que" não traz a ideia de contraste. Exemplos de conectivos que fazem esse papel são: contudo, entretanto, todavia.'
        'e) O conectivo "que" não traz a ideia de conclusão.Exemplos de conectivos que fazem esse papel são: então, logo, portanto.'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa C está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: Quanto às alternativas restantes:'
        'a) Concessão é sinônimo de permissão. As orações que trazem essa ideia são subordinadas (orações subordinadas adverbiais concessivas), mas no caso acima a oração é coordenada.'
        'c) O conectivo "que" não traz a ideia de soma. Exemplos de conectivos que fazem esse papel são: e, mas também, nem.'
        'd) O conectivo "que" não traz a ideia de contraste. Exemplos de conectivos que fazem esse papel são: contudo, entretanto, todavia.'
        'e) O conectivo "que" não traz a ideia de conclusão.Exemplos de conectivos que fazem esse papel são: então, logo, portanto.'
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: Quanto às alternativas restantes:'
        'a) Concessão é sinônimo de permissão. As orações que trazem essa ideia são subordinadas (orações subordinadas adverbiais concessivas), mas no caso acima a oração é coordenada.'
        'c) O conectivo "que" não traz a ideia de soma. Exemplos de conectivos que fazem esse papel são: e, mas também, nem.'
        'd) O conectivo "que" não traz a ideia de contraste. Exemplos de conectivos que fazem esse papel são: contudo, entretanto, todavia.'
        'e) O conectivo "que" não traz a ideia de conclusão.Exemplos de conectivos que fazem esse papel são: então, logo, portanto.'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa E está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: Quanto às alternativas restantes:'
        'a) Concessão é sinônimo de permissão. As orações que trazem essa ideia são subordinadas (orações subordinadas adverbiais concessivas), mas no caso acima a oração é coordenada.'
        'c) O conectivo "que" não traz a ideia de soma. Exemplos de conectivos que fazem esse papel são: e, mas também, nem.'
        'd) O conectivo "que" não traz a ideia de contraste. Exemplos de conectivos que fazem esse papel são: contudo, entretanto, todavia.'
        'e) O conectivo "que" não traz a ideia de conclusão.Exemplos de conectivos que fazem esse papel são: então, logo, portanto.'
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
    }
}