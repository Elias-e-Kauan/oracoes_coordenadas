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
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra C. Justificativa: Em "Não tenho, LOGO, mais que desejar", a conjunção "logo" traz a ideia de conclusão, tal como acontece em "É um ser humano, LOGO merece nosso respeito.'
        'Nas orações restantes "logo":'
        'a) explica que o retrato do menino era o que tanto desejara.'
        'b) tem sentido de "imediatamente".'
        'd) é sinônimo de "justamente", "precisamente".'
        'e) tem sentido de "neste determinado momento".'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa B está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra C. Justificativa: Em "Não tenho, LOGO, mais que desejar", a conjunção "logo" traz a ideia de conclusão, tal como acontece em "É um ser humano, LOGO merece nosso respeito.'
        'Nas orações restantes "logo":'
        'a) explica que o retrato do menino era o que tanto desejara.'
        'b) tem sentido de "imediatamente".'
        'd) é sinônimo de "justamente", "precisamente".'
        'e) tem sentido de "neste determinado momento".'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa C está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra C. Justificativa: Em "Não tenho, LOGO, mais que desejar", a conjunção "logo" traz a ideia de conclusão, tal como acontece em "É um ser humano, LOGO merece nosso respeito.'
        'Nas orações restantes "logo":'
        'a) explica que o retrato do menino era o que tanto desejara.'
        'b) tem sentido de "imediatamente".'
        'd) é sinônimo de "justamente", "precisamente".'
        'e) tem sentido de "neste determinado momento".'
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa D está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra C. Justificativa: Em "Não tenho, LOGO, mais que desejar", a conjunção "logo" traz a ideia de conclusão, tal como acontece em "É um ser humano, LOGO merece nosso respeito.'
        'Nas orações restantes "logo":'
        'a) explica que o retrato do menino era o que tanto desejara.'
        'b) tem sentido de "imediatamente".'
        'd) é sinônimo de "justamente", "precisamente".'
        'e) tem sentido de "neste determinado momento".'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa E está correta.'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra C. Justificativa: Em "Não tenho, LOGO, mais que desejar", a conjunção "logo" traz a ideia de conclusão, tal como acontece em "É um ser humano, LOGO merece nosso respeito.'
        'Nas orações restantes "logo":'
        'a) explica que o retrato do menino era o que tanto desejara.'
        'b) tem sentido de "imediatamente".'
        'd) é sinônimo de "justamente", "precisamente".'
        'e) tem sentido de "neste determinado momento".'
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
    }
}