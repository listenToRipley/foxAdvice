`use strict`

let fox = fetch(`https://randomfox.ca/floof/`) 
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.log(err))

  console.log(fox)

let advice = fetch(`https://api.adviceslip.com/`)
  .then(res => res.json())
  .then(data => data)
  .then(err => console.log(err))

  console.log(fox)