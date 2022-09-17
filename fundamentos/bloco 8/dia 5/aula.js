
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const employer = {...user , ...jobInfos}

employer.hobbys = {}
employer.hobbys.favorite = 'basquete'
employer.hobbys.Sfavorite = 'pintar'

const { hobbys : {favorite: basquete} } = employer



const saudacoes = ['Olá', (saudacao) => console.log(saudacao), ['meu', 'deus']];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [sau , func, [meu, deus]] = saudacoes;
func(deus)

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const arr = [comida, animal, bebida];
[animal, bebida, comida] = arr;
console.log(comida, animal, bebida); // arroz gato água
let numerosPares = [1, 3, 5, 6, 8, 10, 12];


// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

numerosPares = [...numerosPares.filter( a => a%2 == 0)]
console.log(numerosPares); // [6, 8, 10, 12];
