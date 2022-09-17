
const url = 'https://api.coincap.io/v2/assets'

function getCoins() {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const ul = document.querySelector('ul')
    const top10 = data.data.filter(coin => coin.rank < 10)
    top10.forEach((coin, index) => {
      const string = `${coin.name} ${coin.symbol}: ${Math.round(coin.supply*100)/100}`
      const li = document.createElement('li')
      li.innerText = string
      ul.appendChild(li)
    });
  })
}

window.onload = ()=>{ getCoins() }