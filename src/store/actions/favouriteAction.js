export const favouriteActions = {
  increase: () => {
    return { type: "ADD" };
  },
  decrease: () => {
    return { type: "REMOVE" };
  },
  increaseByValue: (payload) => {
    return {
      type: "INCREASE_BY_VALUE",
      payload: Number(payload),
    };
  },
  empty: () => {
    return {
      type: "EMPTY",
    };
  },
};
