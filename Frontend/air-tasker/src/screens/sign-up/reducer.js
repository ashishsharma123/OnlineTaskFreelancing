import * as actions from './actions';
  let initialState = {
    "id": '',
    "password": "",
    "name": "",
    "contact": 0,
    "active": 0,
    "email": "",
    "token": null
}
  export default (state = initialState, action) => {
    switch (action.type) {
      case actions.SIGNUP_SUCCESS:
      console.log('&&&&&&&&&   ', action.payload);
        return Object.assign({}, state, {
          id: action.payload.id,
          token: action.payload.token
        })
      case actions.SIGNUP_FAILURE:
        return Object.assign({}, state, initialState);
      default:
        return state;
    }
  
    return state;
  };