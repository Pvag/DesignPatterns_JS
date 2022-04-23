import FlyBehavior from "./FlyBehavior.js";
import implement from 'implement-js'

// This type of behavior is for ducks that use a rocket to fly !

const FlyOnRocket = {
  fly() {
    console.log(' I prefer taking a rocket, to fly..!')
  }
}

const RocketFlight = implement.default(FlyBehavior)(FlyOnRocket)

export default RocketFlight