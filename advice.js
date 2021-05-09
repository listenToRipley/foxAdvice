import fetchJsonp from 'fetch-jsonp';

const fetch = fetchJsonp({Promise: Advice});

let fetchAdvice = () => {
  fetch(`https://api.adviceslip.com?callback=ad`)
  .then(async res => {
    try {
      let data = await ad(res.json())
      console.log('data : ',data)
      let results = JSON. parse(data)
      console.log('results : ',results)
      return updateAdvice(results)
    } catch (err) {
      console.log(`is there are err? ${err}`)
    }
  })

  
  //  .then(data => {
  //     console.log(data)
  //    })
    // .then(err => console.log(err))
}

let updateAdvice = (slip) => {

  console.log('slip ',slip)

  let adviceId = document.querySelectorAll('#advice')

  adviceId.setAttribute('class', `${data.id}`)
  adviceId.innerText = slip.advice
}

window.onload = () => {
  fetchAdvice()
  console.log('window load advices')
}

