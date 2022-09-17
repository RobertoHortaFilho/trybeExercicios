const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function TestsAnswers (certas, respostas, func){
  const resultado = func(certas, respostas)
  console.log(resultado)
}


function verify(certas, respostas){
  const pont = respostas.map( (value , key) => {
    if (value === 'N.A') return 0
    else if (value === certas[key]) return 1
    return - 0.5
  })
  let total = 0
  pont.forEach(element => {
    total += element
  });
  return total
}

TestsAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, verify)