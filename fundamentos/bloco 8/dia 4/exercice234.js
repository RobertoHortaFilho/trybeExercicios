const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//const names = books.map( (book) => {
//  return book.author.name
//}).reduce( ( acc, iter) => {return `${acc}, ${iter}`})

const names = books.reduce( (acc, iter) => {
  if (typeof acc == 'object') return acc.author.name + ', ' + iter.author.name;
  return acc + ', ' + iter.author.name
})

console.log(names)

const mediaIdades = books.map( book => {
  return book.releaseYear - book.author.birthYear
}).reduce( (acc, iter) => { return acc += iter}) / books.length

console.log(mediaIdades)

const maiorNome = books.reduce( (acc , iter) => {
  return acc.name.length < iter.name.length ? iter : acc;
})


console.log(maiorNome)

const names2 = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const qtdAs = names2.map( name => {
  let qtd = 0
  for (let i = 0; i< name.length ; i++){
    if (name[i] === 'a' || name[i] === 'A'){
      qtd +=1;
    }
  }
  return qtd
}).reduce( (acc, iter) => {
  return acc += iter
})


console.log('qtdAs', qtdAs)