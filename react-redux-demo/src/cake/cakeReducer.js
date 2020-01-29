import { BUY_CAKE } from './cakeTypes'

export const initialState =  {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
      break
    default:
      return state
      break
  }
}
export default cakeReducer