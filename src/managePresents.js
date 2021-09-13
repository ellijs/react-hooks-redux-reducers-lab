export function managePresents(state, action) {

  if (action.type === "presents/increase") {
      return { numberOfPresents: state.numberOfPresents + 1 }
  } else {
    return state
  }
}
