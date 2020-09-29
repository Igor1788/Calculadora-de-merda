// class Cliente{
//     nome;
//     cpf;
// }

// class ContaCorrente{
//     agencia;
//     saldo;
// }

// const cliente1 = new Cliente();
// const cliente2 = new Cliente();


// cliente1.nome= "Ricardo";
// cliente1.cpf= 111222333229;


// cliente2.nome = "Alice";
// cliente2.cpf = 222333445566;
// cliente2.agencia = 1001;
// cliente2.saldo = 0;


// const contaCorrenteRicardo = new ContaCorrente();
// contaCorrenteRicardo.saldo = 0;
// contaCorrenteRicardo.agencia = 1001;
// //console.log(contaCorrenteRicardo.saldo);
// contaCorrenteRicardo.saldo = 90;
// //console.log(contaCorrenteRicardo.saldo);
// let valorSacado = 80;

// const validaSaque = contaCorrenteRicardo.saldo >= valorSacado ? contaCorrenteRicardo.saldo -= valorSacado : "não deu";

var num1 = document.getElementById("numero1");
var num2 = document.getElementById("numero2");
var operadorDom = "soma"

function somaNumero (num1,num2) {
    return num1+num2
}

function divideNumero (num1,num2) {
    return Math.round(num1/num2)
}

function multiplicaNumero (num1,num2) {
    return Math.round(num1*num2)
}

function subtraiNumero (num1,num2) {
    return num1-num2
}

function calcular (operadorDom) {

}

function calc(operador) {
    var operacao = operador.value;

    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    var calculo = eval(numero1+operacao+numero2)
    
    if(!isNaN(calculo)){
        document.getElementById("resultado").innerHTML = calculo;
     }
     
}



console.log(num2);

// imprime resultado no Html

//console.log(divideNumero(10,3));



// if (contaCorrenteRicardo.saldo >= valorSacado) {
//     contaCorrenteRicardo.saldo - valorSacado    
//     console.log(`Você realizou o saque de ${valorSacado}`)
// } else {
//     console.log(`Seu saldo é menor que o necessário R$ ${contaCorrenteRicardo.saldo}`);
// }


//console.log(validaSaque);
// console.log(contaCorrenteRicardo.saldo);

// cliente1.agencia = 1001;
// cliente1.saldo = 0;


//console.log(cliente1, cliente2);