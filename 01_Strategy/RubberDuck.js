import Duck from "./Duck.js"
import Squeak from "./Squeak.js"
import NoFlight from "./NoFlight.js"

class RubberDuck extends Duck {
  constructor() {
    super()
    this.flyBehavior = NoFlight
    this.quackBehavior = Squeak
    this.sayHi()
  }

  sayHi = () => {
    console.log("====")
    console.log('Hey, I am a Rubber Duck !')
  }
}

export default RubberDuck