import { createAction, createReducer } from 'redux-starter-kit';

const increment = createAction('increment')
const decrement = createAction('decrement')

const rootReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement.type]: (state, action) => state - action.payload
})

export default rootReducer;