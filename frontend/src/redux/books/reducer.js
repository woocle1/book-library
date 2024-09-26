import * as a from './actionTypes'

const innitialState = []

const bookReducer = (state = innitialState, action) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload]

    default:
      return state
  }
}

export default bookReducer
