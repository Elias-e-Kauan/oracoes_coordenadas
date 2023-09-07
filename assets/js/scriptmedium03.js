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
    var justificar = document.getElementById('justificativa')

    if (document.getElementById("opcaoA").checked && opA == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa A está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoA").checked && opA == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra A. Justificativa: Embora a conjunção “mas” esteja sendo utilizada nas duas orações, ela transmite ideias diferentes.'
        'Na primeira, o “mas” é utilizado para indicar a soma, adição (Gosta de duas coisas: praia e montanha).'
        'Já na segunda oração, a conjunção transmite a ideia de oposição (a pessoa tem fome, e mesmo assim não está comendo direito).'
        
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa B está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra A. Justificativa: Embora a conjunção “mas” esteja sendo utilizada nas duas orações, ela transmite ideias diferentes.'
        'Na primeira, o “mas” é utilizado para indicar a soma, adição (Gosta de duas coisas: praia e montanha).'
        'Já na segunda oração, a conjunção transmite a ideia de oposição (a pessoa tem fome, e mesmo assim não está comendo direito).'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa C está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra A. Justificativa: Embora a conjunção “mas” esteja sendo utilizada nas duas orações, ela transmite ideias diferentes.'
        'Na primeira, o “mas” é utilizado para indicar a soma, adição (Gosta de duas coisas: praia e montanha).'
        'Já na segunda oração, a conjunção transmite a ideia de oposição (a pessoa tem fome, e mesmo assim não está comendo direito).'
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra A. Justificativa: Embora a conjunção “mas” esteja sendo utilizada nas duas orações, ela transmite ideias diferentes.'
        'Na primeira, o “mas” é utilizado para indicar a soma, adição (Gosta de duas coisas: praia e montanha).'
        'Já na segunda oração, a conjunção transmite a ideia de oposição (a pessoa tem fome, e mesmo assim não está comendo direito).'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa E está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra A. Justificativa: Embora a conjunção “mas” esteja sendo utilizada nas duas orações, ela transmite ideias diferentes.'
        'Na primeira, o “mas” é utilizado para indicar a soma, adição (Gosta de duas coisas: praia e montanha).'
        'Já na segunda oração, a conjunção transmite a ideia de oposição (a pessoa tem fome, e mesmo assim não está comendo direito).'
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
    }
}