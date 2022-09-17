function isNumber(n) {
  if (typeof n == 'number') return true
  return false
}

function multiplyTwo(n) {
  if (typeof n != 'number') throw new Error('n number')
  return n * n
}

describe('test num', () => {
  it('A funçao recebe 3 e retorna true', () => { 
    expect(true).toBe(isNumber(2))
  })
})

describe(' lançar erro', () => {
  it('a funçao recebe "a" e retorna um erro', () => {
    expect(() => {multiplyTwo('a')}).toThrowError(new Error('n number'))
  })

  it('a funçao recebe 2 e retorna 4', () => {expect(4).toBe(multiplyTwo(2))})
})