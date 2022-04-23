import pkg from 'implement-js';
const { Interface, type } = pkg;

// QuackBehavior Interface
//
// Every quack behavior must implement this interface

const QuackBehavior = Interface('QuackBehavior')({
  quack: type('function')
},{
  error: true,
  strict: true
})

export default QuackBehavior