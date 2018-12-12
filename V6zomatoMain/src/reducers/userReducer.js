import { SIGN_USER_UP } from '../constants';

const initialState = {
    user: {}
}

export default (state=initialState, action) => {
    let updated = Object.assign({}, state);
    switch (action.type) {

        case SIGN_USER_UP:
            console.log(action)
            let user = action.data.data
            console.log(user.data)
            updated.user = user;
            
            return updated;

        default: 
            return state;
    }
   
}