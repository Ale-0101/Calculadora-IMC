document.getElementById("test").onmouseover = function(){mouseOver()};
document.getElementById("test").onmouseout = function(){mouseOut()};

function mouseOver(){
    document.getElementById("test").style.color = "red";
}
function mouseOut(){
    document.getElementById("test").style.color = "white";
}

function calcular_imc(){
    var sit = "";
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);

    if (imc < 18.5)
        sit = "Magreza";
    else if (imc <= 24.9)
        sit = "Normal";
    else if (imc <= 29.9)
        sit = "Sobrepeso";
    else if (imc <= 34.9)
        sit = "Obesidade grau I";
    else if (imc <= 39.9)
        sit = "Obesidade grau II";
    else
        sit = "Obesidade grau III";

    document.getElementById("imc").value = imc.toFixed(2);
    document.getElementById("sit").value = sit;

    return false; // Evita o recarregamento da página
}

