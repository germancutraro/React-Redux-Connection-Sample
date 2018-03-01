const userActiveReducer = (state = null, action) => {
  switch(action.type) {
    case 'USER_SELECTED':
      return action.payload;
     default:
       return state; 
  }
};

export { userActiveReducer }