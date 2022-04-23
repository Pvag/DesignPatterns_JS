import Duck from "./Duck.js"
import Quack from "./Quack.js"
import NaturalFlight from "./NaturalFlight.js"

class MallardDuck extends Duck {
  constructor() {
    super()
    this.flyBehavior = NaturalFlight
    this.quackBehavior = Quack
    this.sayHi()
  }

  sayHi = () => {
    console.log("====")
    console.log('Hey, I am a Mallard Duck !')
  }
}

export default MallardDuck