# How to deal with state on React applications
Facilitated by [Martín García Blanco](https://github.com/martin-garcia-blanco) and [Codurance](https://www.codurance.com/) ![]()
<img src="https://pbs.twimg.com/profile_images/1459131184873619480/P3VvXdWN_400x400.png" alt="drawing"  height="50"/>

This is a demo to explain how to handle the state in a react application
- useEffect
- useState
- Redux
</br>
</br>
</br>
</br>
</br>

## What is a Hook?
- A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components
</br>
</br>
</br>
</br>

## useState
```
const [banana, setBanana] = useState(🍌)
console.log('this is a 'banana) // this is a 🍌
setBanana(🐒)
console.log('this is a 'banana) // this is a 🐒
```
</br>
</br>
</br>
</br>

## useEffect
- **What does useEffect do?** By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

- **Why is useEffect called inside a component?** it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution

- **Does useEffect run after every render?** Yes! By default 🤦🏻‍♂️, it runs both after the first render and after every update. (We will later talk about how to customize this.)
```
useEffect(()=>{
  Code to do on each render

  return ()=>{
    code to do on destroy the component
  }
}, [some magic for later])
```

</br>
</br>
</br>
</br>

# Redux

- Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. You can use Redux together with React, or with any other view library.

 <img alt="Redux Flow" src="https://redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png" height="250px">

- **Actions**: 
  - An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.
  - Can have other fields with additional information about what happened. By convention, we put that information in a field called payload.
- **Reducers**
  - A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.
- **Store**
  - The current Redux application state lives in an object called the store .

