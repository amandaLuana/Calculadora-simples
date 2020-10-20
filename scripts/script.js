function somar() {
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.querySelector('input#txtn2');
    var res = document.getElementById('res');

    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var somar = n1 + n2;
    res.innerHTML = `Resultado: <strong>${somar}</strong>`;
}

function subtrair() {
    var tn3 = document.getElementById('txtn3');
    var tn4 = document.getElementById('txtn4');
    var result = document.getElementById('result');

    var n1 = Number(tn3.value);
    var n2 = Number(tn4.value);
    var subtrair = n1 - n2;
    result.innerHTML = `Resultado: <strong>${subtrair}</strong>`;
}

function multiplicar() {
    var tn5 = document.getElementById('txtn5');
    var tn6 = document.getElementById('txtn6');
    var res = document.getElementById('rs');

    var n1 = Number(tn5.value);
    var n2 = Number(tn6.value);
    var multiplicar = n1 * n2;
    rs.innerHTML = `Resultado: <strong>${multiplicar}</strong>` 
}

function dividir() {
    var tn7 = document.getElementById('txtn7');
    var tn8 = document.getElementById('txtn8');
    var re = document.getElementById('re');

    var n1 = Number(tn7.value);
    var n2 = Number(tn8.value);
    var dividir = n1 / n2;
    re.innerHTML = `Resultado: <strong>${dividir}</strong>`;
}

function restoDivisao() {
    var tn9 = document.getElementById('txtn9');
    var tn10 = document.getElementById('txtn10');
    var restoDivisao = document.getElementById('restoDivisao');

    var n1 = Number(tn9.value);
    var n2 = Number(tn10.value);
    var restoDiv = n1 % n2;
    restoDivisao.innerHTML = `Resultado: <strong>${restoDiv}</strong>`;
}

function potencia() {
    var tn11 = document.getElementById('txtn11');
    var tn12 = document.getElementById('txtn12');
    var potenc = document.getElementById('potencia');

    var n1 = Number(tn11.value);
    var n2 = Number(tn12.value);
    var resultadoP = n1 ** n2;
    potenc.innerHTML = `Resultado: <strong>${resultadoP}</strong>`

}