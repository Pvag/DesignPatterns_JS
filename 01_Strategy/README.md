# DESIGN PATTERNS

## The **Strategy** Pattern
### (study and code-along)

This is a JS Implementation of this pattern, ported from the book:
"Head First Design Patterns", by Elisabeth Freeman, Eric Freeman,
O'Reilly (2004), which implements the patterns in Java.

Ported by:
  Pvag  (https:github.com/Pvag)

## What is the code about ?

It is a simple implementation of a "Duck Simluator",
a computer program that simulates the behavior of a group
of ducks: they can make their voice heard and they can
fly, with different means or don't fly at all.

This flight simulator presents itself with some potential
troubles for the implementation and some of those may be
understood reading through the next section.

Some context about the Strategy Pattern

The Behavior is encapsulated in classes that must adhere
to a specific interface, i.e. they are required to
implement their own version of specific methods.

Let's take a look at the FlyBehavior, for example. That is
an interface that requires the implementation of the `fly` method.
We have implemented 3 different fly behavior:
- NaturalFlight
- NoFlight
- RocketFlight
As one can see from the code below, we have a method
for the "hot swap" of fly behavior, at runtime!

This pattern presents these main advantages:
- favors composition over inheritance
- by using interfaces, it encapsulates a behavior in a
  specific class: the behavior can then be swapped at runtime,
  if needed and it allows for the composition of different types
  of ducks, just by choosing an existing fly and quack behavior,
  or by implementing new ones, if the desired behaviors are not existing yet !
- avoiding to rely on inheritance for specifi behaviors, it allows
  to avoid an overcrowding of methods in the parent Duck class, that
  would otherwise be all inherited by every descendant, leading for example
  to the ability to fly naturally for a rubber duck, which would not
  correspond to the real behavior

## A note about Interfaces in JS

The project uses the `implement-js` package, in order to have a mean
to declare Interfaces in JS OOP.