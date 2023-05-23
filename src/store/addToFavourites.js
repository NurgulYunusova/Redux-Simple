export function addToFavouritesReducer(state, action) {
  if (state == undefined) return [];

  if (action.type == "ADD") {
    return [...state, action.payload];
  } else if (action.type == "REMOVE") {
    let filteredFavourites = state.filter((q) => q.id != action.payload);
    return [...filteredFavourites];
  } else if (action.type == "EMPTY") {
    return [];
  } else {
    return state;
  }
}
