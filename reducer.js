const initialState = {
  currentUser: null,
};

const root = (state = initialState, action) => {
  switch (action.type) {
    case "SETUSER":
      return { currentUser: action.payload.currentUser };

    default:
      return state;
  }
};
export default root;
