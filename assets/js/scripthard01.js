var exerciseBox = document.getElementById('exercise')
var main = document.getElementById('hard1')
function proxPagina() {
    var confirmAdvance = confirm("Você quer mesmo avançar para a próxima questão? (Ação sem retorno)")
    if (confirmAdvance == true) {
        window.location = "../../pages/hard/hardQ02.html"
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

    var justificar = document.getElementById('justificativa')
    var pontuacao = 0


    if (document.getElementById("opcaoA").checked && opA == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa A está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra C. Justificativa: Em "Não tenho, LOGO, mais que desejar", a conjunção "logo" traz a ideia de conclusão, tal como acontece em "É um ser humano, LOGO merece nosso respeito.<br> Nas orações restantes "logo":<br> a) explica que o retrato do menino era o que tanto desejara.<br> b) tem sentido de "imediatamente".<br> d) é sinônimo de "justamente", "precisamente".<br> e) tem sentido de "neste determinado momento".`
        exerciseBox.style.height = '960px'
        justificar.style.textAlign = "justify"
        main.style.height = '120vh'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa B está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra C. Justificativa: Em "Não tenho, LOGO, mais que desejar", a conjunção "logo" traz a ideia de conclusão, tal como acontece em "É um ser humano, LOGO merece nosso respeito.<br> Nas orações restantes "logo":<br> a) explica que o retrato do menino era o que tanto desejara.<br> b) tem sentido de "imediatamente".<br> d) é sinônimo de "justamente", "precisamente".<br> e) tem sentido de "neste determinado momento".`
        exerciseBox.style.height = '960px'
        justificar.style.textAlign = "justify"
        main.style.height = '120vh'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa C está correta.'
        justificar.style.textAlign = "center"
        exerciseBox.style.height = '820px'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra C. Justificativa: Em "Não tenho, LOGO, mais que desejar", a conjunção "logo" traz a ideia de conclusão, tal como acontece em "É um ser humano, LOGO merece nosso respeito.<br> Nas orações restantes "logo":<br> a) explica que o retrato do menino era o que tanto desejara.<br> b) tem sentido de "imediatamente".<br> d) é sinônimo de "justamente", "precisamente".<br> e) tem sentido de "neste determinado momento".`
        exerciseBox.style.height = '960px'
        justificar.style.textAlign = "justify"
        main.style.height = '120vh'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra C. Justificativa: Em "Não tenho, LOGO, mais que desejar", a conjunção "logo" traz a ideia de conclusão, tal como acontece em "É um ser humano, LOGO merece nosso respeito.<br> Nas orações restantes "logo":<br> a) explica que o retrato do menino era o que tanto desejara.<br> b) tem sentido de "imediatamente".<br> d) é sinônimo de "justamente", "precisamente".<br> e) tem sentido de "neste determinado momento".`
        exerciseBox.style.height = '960px'
        justificar.style.textAlign = "justify"
        main.style.height = '120vh'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa E está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra C. Justificativa: Em "Não tenho, LOGO, mais que desejar", a conjunção "logo" traz a ideia de conclusão, tal como acontece em "É um ser humano, LOGO merece nosso respeito.<br> Nas orações restantes "logo":<br> a) explica que o retrato do menino era o que tanto desejara.<br> b) tem sentido de "imediatamente".<br> d) é sinônimo de "justamente", "precisamente".<br> e) tem sentido de "neste determinado momento".` 
        exerciseBox.style.height = '960px'
        justificar.style.textAlign = "justify"
        main.style.height = '120vh'
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
        justificar.style.textAlign = "center"
        exerciseBox.style.height = '820px'
    }
    document.getElementById('score').getElementsByTagName('p')[0].textContent = '0' + pontuacao;
}