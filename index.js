const { default: advice } = require("./advice")

fox  = require("./fox")
advice = require('./advice')

window.onload = () => {
  fox.fetchFox()
  console.log('window load foxes')
  advice.fetchAdvice()
  console.log('window load advice')
}
