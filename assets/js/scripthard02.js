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
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: A oração acima traz a ideia de conclusão: se há um novo rei, logo haverá nova lei. Ela poderia ser escrita da seguinte forma: Reino com novo rei, (logo) povo com nova lei.'
        'As orações restantes trazem a ideia de oposição:'
        'a) Morre o homem, mas fica a fama.'
        'c) Por fora bela viola, mas por dentro pão bolorento.'
        'd) Amigos, amigos! Mas, negócios à parte.'
        'e) A palavra é de prata, mas o silêncio é de ouro.'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa B está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: A oração acima traz a ideia de conclusão: se há um novo rei, logo haverá nova lei. Ela poderia ser escrita da seguinte forma: Reino com novo rei, (logo) povo com nova lei.'
        'As orações restantes trazem a ideia de oposição:'
        'a) Morre o homem, mas fica a fama.'
        'c) Por fora bela viola, mas por dentro pão bolorento.'
        'd) Amigos, amigos! Mas, negócios à parte.'
        'e) A palavra é de prata, mas o silêncio é de ouro.'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa C está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: A oração acima traz a ideia de conclusão: se há um novo rei, logo haverá nova lei. Ela poderia ser escrita da seguinte forma: Reino com novo rei, (logo) povo com nova lei.'
        'As orações restantes trazem a ideia de oposição:'
        'a) Morre o homem, mas fica a fama.'
        'c) Por fora bela viola, mas por dentro pão bolorento.'
        'd) Amigos, amigos! Mas, negócios à parte.'
        'e) A palavra é de prata, mas o silêncio é de ouro.'
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: A oração acima traz a ideia de conclusão: se há um novo rei, logo haverá nova lei. Ela poderia ser escrita da seguinte forma: Reino com novo rei, (logo) povo com nova lei.'
        'As orações restantes trazem a ideia de oposição:'
        'a) Morre o homem, mas fica a fama.'
        'c) Por fora bela viola, mas por dentro pão bolorento.'
        'd) Amigos, amigos! Mas, negócios à parte.'
        'e) A palavra é de prata, mas o silêncio é de ouro.'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!! A alternativa E está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: A oração acima traz a ideia de conclusão: se há um novo rei, logo haverá nova lei. Ela poderia ser escrita da seguinte forma: Reino com novo rei, (logo) povo com nova lei.'
        'As orações restantes trazem a ideia de oposição:'
        'a) Morre o homem, mas fica a fama.'
        'c) Por fora bela viola, mas por dentro pão bolorento.'
        'd) Amigos, amigos! Mas, negócios à parte.'
        'e) A palavra é de prata, mas o silêncio é de ouro.'
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
    }
    document.getElementById('score').getElementsByTagName('p')[0].textContent = pontuacao;
}