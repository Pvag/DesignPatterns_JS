import pkg from 'implement-js';
const { Interface, type } = pkg;

// FlyBehavior Interface
//
// Every fly behavior must implement this interface

const FlyBehavior = Interface('FlyBehavior')({
  fly: type('function')
},{
  error: true,
  strict: true
})

export default FlyBehavior