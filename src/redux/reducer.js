const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "LOAD_LESSONS":
      return {
        ...state,
        lessons: payload
      }

    default:
      return state
  }
}

export default reducer
