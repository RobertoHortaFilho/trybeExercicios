function person (func){
  const person = func()
  for (let key of Object.keys(person)){
    const emp = {
      name : person[key],
      email : `${person[key]}@trybe.com`
    }
    console.log(emp)
  }
}

const newEmployees = () => {
  const employees = {
    id1: 'pedro', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: 'luiza', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: 'carla', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

person(newEmployees)