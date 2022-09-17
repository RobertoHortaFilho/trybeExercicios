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

function authorBornIn1947() {
  return books.find( element => {
    return element.author.birthYear === 1947 
  }).author.name
}

//console.log(authorBornIn1947())

function smallerName() {
  let nameBook = books[0].name
  // escreva aqui o seu código
  books.forEach( element => {
    if (nameBook.length > element.name.length){
      nameBook = element.name
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

//console.log(smallerName())

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find( (element) =>{
    return element.name.length === 26
  })
}

//console.log(getNamedBook())

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort( (a,b) => {
    return b.releaseYear - a.releaseYear
  })
}

//console.log(booksOrderedByReleaseYearDesc())

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every( element => {
    return element.author.birthYear >= 1900 && element.author.birthYear < 2000
  })
}
//console.log(everyoneWasBornOnSecXX())


function someBookWasReleaseOnThe80s() {
  return books.some( element => {
    return element.releaseYear >= 1980 && element.releaseYear < 1990
  })
}

//console.log(someBookWasReleaseOnThe80s())

function authorUnique() {
  let uniq = true 
  books.forEach( (element, index) => {
    books.forEach( (atual, index2) => {
      if (index != index2){
        if (element.author.birthYear === atual.author.birthYear){
          uniq = false
        }
      }  
    })

  })
  return uniq
}

function authorUnique2(){
  const bird = books.map( element => {
    return element.author.birthYear
  })

  return bird.length === [...new Set(bird)].length

}
console.log(authorUnique2())
