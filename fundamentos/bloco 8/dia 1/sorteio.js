function Sorteio(num, func){
  const sor = Math.floor( Math.random() * 5)+1
  func(sor)
}

Sorteio(3, (numberSorteado) => {
  if (numberSorteado === 3){
    console.log('vc acerto')
  }else console.log('vc errou era ', numberSorteado);
})