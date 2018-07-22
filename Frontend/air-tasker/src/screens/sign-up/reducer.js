import * as actions from './actions';
  
  export default (state = {token: true}, action) => {
    switch (action.type) {
      case actions.CALL_SIGNUP_API:
        return {...state}
      default:
        return state;
    }
  
    return state;
  };