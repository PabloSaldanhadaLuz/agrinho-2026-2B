let pontos = 0;
let respostas = 0;

function responder(botao, correta){

    let grupo = botao.parentElement;

    if(grupo.classList.contains("respondido")){
        return;
    }

    grupo.classList.add("respondido");

    respostas++;

    if(correta){
        pontos++;
        botao.style.background = "green";
    }else{
        botao.style.background = "red";
    }

    if(respostas === 3){

        document.getElementById("resultado").innerHTML =
        `Você acertou ${pontos} de 3 perguntas! 🌱`;

    }

}