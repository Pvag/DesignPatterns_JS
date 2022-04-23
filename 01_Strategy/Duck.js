class Duck {
  constructor() {
    this.flyBehavior = null
    this.quackBehavior = null
  }

  // this is a way to request an override by children classes,
  // as a sort of an abstract method
  sayHi = () => {
    throw new Error('You have to implement the method doSomething!')
  }

  performFly = () => {
    this.flyBehavior.fly()    
  }

  performQuack = () => {
    this.quackBehavior.quack()
  }

  setFlyBehavior = (behavior) => {
    this.flyBehavior = behavior
  }
}

export default Duck