
export default (state = {}, action) => {
  const { day, location, hours, booth, month, selection, id } = action;
  switch (action.type) {
  case 'ADD_PRODUCE':
    return Object.assign({}, state, {
      [id]: {
        month: month,
        selection: selection,
        id: id
      }
    });
  case 'ADD_SCHEDULE':
  return Object.assign({}, state, {
    [id]: {
      day: day,
      location: location,
      hours: hours,
      booth: booth,
      id: id
    }
  });
  default:
    return state;
  }
};