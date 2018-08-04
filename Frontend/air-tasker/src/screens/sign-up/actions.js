export const SIGNUP_SUCCESS = "signup_success";
export const SIGNUP_FAILURE = "signup_failure";
export const SIGNUP_FAKE_ACTION = "fake_action";
export const ACTION_LOGOUT = 'action_logout';
export const STEP_1_SUCCESS = 'step_1_success';
export const STEP_2_SUCCESS = "step_2_success";

export const logout = () =>{
    return {
        type: ACTION_LOGOUT
    }
}

export const registerStep1 = (_data) =>{
    return {
        type: STEP_1_SUCCESS,
        payload: _data
    }
}

export const registerStep2 = (_data) =>{
    return {
        type: STEP_2_SUCCESS,
        payload: _data
    }
}


