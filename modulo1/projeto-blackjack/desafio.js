// let baralhoComputador = comprarCarta()
// let baralhoJogador = []
// let retorno = confirm         // NÃO SEI SE PRECISA, TALVEZ EU REMOVA 
// function playerBuyCard(){     // FUNCAO PARA COMPRAR CARTA NO BARALHO
//    let item = comprarCarta()
//    baralhoJogador.push(item)
//    item = null



// }
// if (confirm("COMPRAR CARTA?")){
//    alert("OI NE")
// }
// if (retorno == confirm){
//     if(confirm("VAMO LA LINDAO")){

// alert("ate que vai")}

// }

//somar o valor das duas cartas do jogador e somar tambem do computador

const jogadorCarta1 = comprarCarta()
const jogadorCarta2 = comprarCarta()
const valorJogador = jogadorCarta1.valor + jogadorCarta2.valor
const computadorCarta1 = comprarCarta() 
const computadorCarta2 = comprarCarta()
const valorComputador = computadorCarta1.valor + computadorCarta2.valor
function acabouJogo(){
alert("O Jogo Acabou :(")
}



console.log("Seja bem vindo ao jogo BlackJack!")

if(confirm("Clique em OK para iniciar uma nova rodada!")){



   console.log(`Usuário - Cartas ${jogadorCarta1.texto} ${jogadorCarta2.texto} - pontuação ${valorJogador} `)
   console.log(`Computador - Cartas ${computadorCarta1.texto} ${computadorCarta2.texto} - pontuação ${valorComputador} `)
      if(jogadorCarta1 == jogadorCarta2){
         acabouJogo()
      }
      if(computadorCarta1 == computadorCarta2){
         acabouJogo()
      }

      if (valorJogador>valorComputador){
         console.log("O Jogador Ganhou")
      }
      else if(valorJogador<valorComputador){
         console.log("O Computador Ganhou")
      }
      else{
         console.log ("Empate!")
      }

   

   
}

else{
   console.log("O Jogo Acabou :(")
}



