function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

let salario = 2000
let soma100 = (qtdeCarrosVendidos*100)
let divisaoCarro = (valorTotalVendas*5)/100

salario = salario += soma100 //100Reais por carro
salario = salario += divisaoCarro


  return salario

}

