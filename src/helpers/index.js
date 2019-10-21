/* eslint-disable no-prototype-builtins */
/* eslint-disable max-len */
export const createReducer = (initialState, handlers) => function reducer(state = initialState, action) {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};

export const updateObject = (oldObject, newValues) => ({ ...oldObject, ...newValues });
