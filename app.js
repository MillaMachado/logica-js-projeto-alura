alert("Boas vindas ao jogo do número secreto");

let max = 100;
let numeroSecreto = parseInt(Math.random() * max + 1);

console.log(numeroSecreto)

let chute;
let tentativas = 1;

// enquanto não acertar o valor
while(chute != numeroSecreto){
    
    chute = prompt(`Escolha um número entre 1 e ${max}`);

    // operador ternário
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

    // se acertar sai da aplicação
    if (numeroSecreto == chute){

        alert(`Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
        break;

    }

    else{
        if (numeroSecreto > chute){

            alert(`O número secreto é maior que ${chute}`);

        }
        
        else{

            alert(`O número secreto é menor que ${chute}`);

        }
       tentativas++;
    }
}
