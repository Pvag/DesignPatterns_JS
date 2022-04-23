import FlyBehavior from "./FlyBehavior.js";
import implement from 'implement-js'

// This type of behavior is for ducks that fly naturally

const FlyNaturally = {
  fly() {
    console.log(' I can fly naturally, on my own')
  }
}

const NaturalFlight = implement.default(FlyBehavior)(FlyNaturally)

export default NaturalFlight