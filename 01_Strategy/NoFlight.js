import FlyBehavior from "./FlyBehavior.js";
import implement from 'implement-js'

// This type of behavior is for ducks that do not fly !

const NoFlightAtAll = {
  fly() {
    console.log(' there\'s no way I can fly on my own!')
  }
}

const NoFlight = implement.default(FlyBehavior)(NoFlightAtAll)

export default NoFlight