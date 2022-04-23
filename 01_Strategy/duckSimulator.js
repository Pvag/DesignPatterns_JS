import MallardDuck from "./MallardDuck.js"
import RubberDuck from "./RubberDuck.js"
import RocketFlight from "./RocketFlight.js"

const mallardy = new MallardDuck()
mallardy.performFly()
mallardy.performQuack()

const rubbery = new RubberDuck()
rubbery.performFly()
rubbery.performQuack()
rubbery.setFlyBehavior(RocketFlight) // change behavior at runtime !
rubbery.performFly()