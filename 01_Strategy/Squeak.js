import QuackBehavior from "./QuackBehavior.js";
import implement from 'implement-js'

// This type of behavior is for ducks that squeak

const Squeaky = {
  quack() {
    console.log(' squeeaky, squeeaky')
  }
}

const Squeak = implement.default(QuackBehavior)(Squeaky)

export default Squeak