let numeroSecreto = Math.floor(Math.random() * 100);

function verificar(){

    let valor = document.getElementById("numeroUsuario").value;
    let resultado = document.getElementById("resultado");

    if(valor == numeroSecreto){
        resultado.innerHTML = ("Você acertou, o número era " + numeroSecreto);
        document.getElementById("corpo").style.setProperty("background-color", "green");
    }

    else if(valor > numeroSecreto){
        resultado.innerHTML = ("Muito alto!");
        document.getElementById("corpo").style.setProperty("background-color", "red");
    }

    else{
        resultado.innerHTML = ("Muito baixo!");
        document.getElementById("corpo").style.setProperty("background-color", "red");
    }

}