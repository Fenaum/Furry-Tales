function create(setupFunction) {
  // This is the set function that Zustand provides
  function set(newState) {
    state = { ...state, ...newState };
  }

  // Call the setup function with the set function
  const initialState = setupFunction(set);

  // Initialize state with the setup function
  let state = initialState;

  // Return an object that exposes the state and actions
  return {
    getState: () => state,
    // Other methods...
  };
}
