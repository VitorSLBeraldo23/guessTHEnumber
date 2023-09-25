// geração do valor aleatório
var y = Math.floor(Math.random () * 10 + 1);

guess = 1;

function submit(){
    var x = document.getElementById("guessField").value;

    if(x == y)
    {
        alert("PARABÉNS!!!"+playername+", você acertou em " + guess + "tentativas(s)!");
        guess=1;
    }
    else if(x > y){
        guess++;
        alert("Opa, resposta errada!! Tente um número menor");
    }
    else{
        guess++;
        alert("Opa, resposta errada!! Tente um número maior")
    }
    
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}
// contagem de tentativas
// até acerto    
  
// função para o número enviado pelo usuário
