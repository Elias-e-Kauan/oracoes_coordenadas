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
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: Correção:'
        '1. Correu demais, por isso caiu. (oração coordenada sindética conclusiva)'
        '2. Dormiu mal, porque os sonhos não o deixaram em paz. (oração coordenada sindética explicativa)'
        '3. A matéria perece, mas a alma é imortal. (oração coordenada sindética adversativa)' 
        '4. Leu o livro, portanto é capaz de descrever as personagens com detalhes. (oração coordenada sindética conclusiva)'
        '5. Guarde seus pertences, que podem servir mais tarde. (oração coordenada sindética explicativa)'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoB").checked && opB == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa B está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoB").checked && opB == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: Correção:'
        '1. Correu demais, por isso caiu. (oração coordenada sindética conclusiva)'
        '2. Dormiu mal, porque os sonhos não o deixaram em paz. (oração coordenada sindética explicativa)'
        '3. A matéria perece, mas a alma é imortal. (oração coordenada sindética adversativa)' 
        '4. Leu o livro, portanto é capaz de descrever as personagens com detalhes. (oração coordenada sindética conclusiva)'
        '5. Guarde seus pertences, que podem servir mais tarde. (oração coordenada sindética explicativa)'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoC").checked && opC == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa C está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoC").checked && opC == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: Correção:'
        '1. Correu demais, por isso caiu. (oração coordenada sindética conclusiva)'
        '2. Dormiu mal, porque os sonhos não o deixaram em paz. (oração coordenada sindética explicativa)'
        '3. A matéria perece, mas a alma é imortal. (oração coordenada sindética adversativa)' 
        '4. Leu o livro, portanto é capaz de descrever as personagens com detalhes. (oração coordenada sindética conclusiva)'
        '5. Guarde seus pertences, que podem servir mais tarde. (oração coordenada sindética explicativa)'
    }
    else if (document.getElementById("opcaoD").checked && opD == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa D está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoD").checked && opD == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: Correção:'
        '1. Correu demais, por isso caiu. (oração coordenada sindética conclusiva)'
        '2. Dormiu mal, porque os sonhos não o deixaram em paz. (oração coordenada sindética explicativa)'
        '3. A matéria perece, mas a alma é imortal. (oração coordenada sindética adversativa)' 
        '4. Leu o livro, portanto é capaz de descrever as personagens com detalhes. (oração coordenada sindética conclusiva)'
        '5. Guarde seus pertences, que podem servir mais tarde. (oração coordenada sindética explicativa)'
        pontuacao = pontuacao + 0
    }
    else if (document.getElementById("opcaoE").checked && opE == true) {
        document.getElementById('justificativa').innerHTML = 'Parabéns!!, A alternativa E está correta.'
        justificar.style.textAlign = "center"
        pontuacao = pontuacao + 5
    }
    else if (document.getElementById("opcaoE").checked && opE == false) {
        document.getElementById('justificativa').innerHTML = 'Errado, a alternativa correta é a letra B. Justificativa: Correção:'
        '1. Correu demais, por isso caiu. (oração coordenada sindética conclusiva)'
        '2. Dormiu mal, porque os sonhos não o deixaram em paz. (oração coordenada sindética explicativa)'
        '3. A matéria perece, mas a alma é imortal. (oração coordenada sindética adversativa)' 
        '4. Leu o livro, portanto é capaz de descrever as personagens com detalhes. (oração coordenada sindética conclusiva)'
        '5. Guarde seus pertences, que podem servir mais tarde. (oração coordenada sindética explicativa)'
        pontuacao = pontuacao + 0
    }
    else {
        document.getElementById('justificativa').innerHTML = 'Nenhuma alternativa foi selecionada'
    }
}