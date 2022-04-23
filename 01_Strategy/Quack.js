import QuackBehavior from "./QuackBehavior.js";
import implement from 'implement-js'

// This type of behavior is for ducks that quack

const Quacky = {
  quack() {
    console.log(' quack-quaaaaack !')
  }
}

const Quack = implement.default(QuackBehavior)(Quacky)

export default Quack