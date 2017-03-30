export const peoplesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PEOPLES':
      return action.payload
    default:
      return state
  }
}
