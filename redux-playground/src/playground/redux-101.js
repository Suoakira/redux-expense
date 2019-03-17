import { createStore } from "redux"

const store = createStore((state = { count: 0 }, action ) => {

  switch (action.type) {
    case 'INCREMENT':
    return {
      count: state.count + 1
    }
    break
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
      break
    case 'RESET':
      return {
        count: state.count = 0
      }
      break
    default:
      return state
  }

})

//returns the current state
console.log(store.getState())



// Actions - an object that gets sent to the store
// allows us to send of an action object to the store
store.dispatch({
  type: "INCREMENT" // convention actions to uppercase
})

store.dispatch({
  type: "INCREMENT" // convention actions to uppercase
})

store.dispatch({
  type: "RESET"
})

store.dispatch({
  type: "DECREMENT" // convention actions to uppercase
})



console.log(store.getState())


// I'd like to increment the count
// I'd like to reset the count to zero
