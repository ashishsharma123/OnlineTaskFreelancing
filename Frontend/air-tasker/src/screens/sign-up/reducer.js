import * as actions from './actions';
let user = window.localStorage.getItem('user');
  let initialState = {
    "id": '',
    "password": "",
    "name": "",
    "contact": 0,
    "active": 0,
    "email": "",
    "token": null,
    "isLoggedIn": false,
    "isRegistretionComplete": false,
    "firstName": "",
    "lastName": "",
    "city": "",
    "roleId": "",
    "categories": [],
    "description": ""
}
  export default (state = initialState, action) => {
    switch (action.type) {
      case actions.SIGNUP_SUCCESS:
        return Object.assign({}, state, {
          id: action.payload.id,
          token: action.payload.token,
          active: action.payload.active,
          isLoggedIn: true
        })
      case actions.SIGNUP_FAILURE:
        return Object.assign({}, state, initialState);

      case actions.ACTION_LOGOUT:
        return Object.assign({}, state, {
          id: "",
          token: null,
          active: false,
          isLoggedIn: false
        })

      case actions.STEP_1_SUCCESS:
        return Object.assign({}, state, {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          city: action.payload.city,
          roleId: action.payload.roleId
        })
      case actions.STEP_2_SUCCESS:
        return Object.assign({}, state, {
          categories: action.payload.categories,
          description: action.payload.description,
          isRegistretionComplete: true
        })
      default:
        return state;
    }
  
    return state;
  };