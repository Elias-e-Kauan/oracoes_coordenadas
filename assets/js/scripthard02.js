var exerciseBox = document.getElementById('exercise')
function proxPagina() {
    var confirmAdvance = confirm("Você quer mesmo avançar para a próxima questão? (Ação sem retorno)")
    if (confirmAdvance == true) {
        window.location = "../../pages/hard/hardQ03.html"
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

    var justificar = document.getElementById('justificativa')
    var pontuacao = 0


    if (document.getElementById("opcaoA").checked && opA == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa A está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra B. Justificativa: A oração acima traz a ideia de conclusão: se há um novo rei, logo haverá nova lei. Ela poderia ser escrita da seguinte forma: Reino com novo rei, (logo) povo com nova lei.<br> As orações restantes trazem a ideia de oposição:<br> a) Morre o homem, mas fica a fama.<br> c) Por fora bela viola, mas por dentro pão bolorento.<br> d) Amigos, amigos! Mas, negócios à parte.<br> e) A palavra é de prata, mas o silêncio é de ouro.`
        exerciseBox.style.height = '640px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa B está correta.'
        justificar.style.textAlign = "center"
        exerciseBox.style.height = '480px'
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra B. Justificativa: A oração acima traz a ideia de conclusão: se há um novo rei, logo haverá nova lei. Ela poderia ser escrita da seguinte forma: Reino com novo rei, (logo) povo com nova lei.<br> As orações restantes trazem a ideia de oposição:<br> a) Morre o homem, mas fica a fama.<br> c) Por fora bela viola, mas por dentro pão bolorento.<br> d) Amigos, amigos! Mas, negócios à parte.<br> e) A palavra é de prata, mas o silêncio é de ouro.`
        exerciseBox.style.height = '640px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa C está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra B. Justificativa: A oração acima traz a ideia de conclusão: se há um novo rei, logo haverá nova lei. Ela poderia ser escrita da seguinte forma: Reino com novo rei, (logo) povo com nova lei.<br> As orações restantes trazem a ideia de oposição:<br> a) Morre o homem, mas fica a fama.<br> c) Por fora bela viola, mas por dentro pão bolorento.<br> d) Amigos, amigos! Mas, negócios à parte.<br> e) A palavra é de prata, mas o silêncio é de ouro.`
        exerciseBox.style.height = '640px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra B. Justificativa: A oração acima traz a ideia de conclusão: se há um novo rei, logo haverá nova lei. Ela poderia ser escrita da seguinte forma: Reino com novo rei, (logo) povo com nova lei.<br> As orações restantes trazem a ideia de oposição:<br> a) Morre o homem, mas fica a fama.<br> c) Por fora bela viola, mas por dentro pão bolorento.<br> d) Amigos, amigos! Mas, negócios à parte.<br> e) A palavra é de prata, mas o silêncio é de ouro.`
        exerciseBox.style.height = '640px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa E está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = `Errado, a alternativa correta é a letra B. Justificativa: A oração acima traz a ideia de conclusão: se há um novo rei, logo haverá nova lei. Ela poderia ser escrita da seguinte forma: Reino com novo rei, (logo) povo com nova lei.<br> As orações restantes trazem a ideia de oposição:<br> a) Morre o homem, mas fica a fama.<br> c) Por fora bela viola, mas por dentro pão bolorento.<br> d) Amigos, amigos! Mas, negócios à parte.<br> e) A palavra é de prata, mas o silêncio é de ouro.`
        exerciseBox.style.height = '640px'
        justificar.style.textAlign = "justify"
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
        justificar.style.textAlign = "center"
        exerciseBox.style.height = '480px'
    }
    document.getElementById('score').getElementsByTagName('p')[0].textContent = '0' + pontuacao;
}