ˋˋˋ
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  mediaEx = (ex*1)
  mediaP1 = (p1*2)
  mediaP2 = (p2*3)
  somaDePesos = (1+2+3)
  mediaTotal = (mediaEx+=mediaP1+=mediaP2) / somaDePesos
  
  if(mediaTotal >= 9){
    return 'A'
  }
  else if (mediaTotal <9 && mediaTotal >=7.5){
    return 'B'
  }
  else if (mediaTotal <7.5 && mediaTotal >=6){
    return 'C'
  }
  else{
    return 'D'
  }
}
ˋˋˋ