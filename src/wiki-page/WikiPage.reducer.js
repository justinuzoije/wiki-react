const INITIAL_STATE = {
  content: '',
  editing: false
};

export default function reducer(state =
  INITIAL_STATE, action) {
  if (action.type === 'update-content') {
    return Object.assign({}, state, {
      content: action.content
    });
  } else {
  return state;
  }
}
