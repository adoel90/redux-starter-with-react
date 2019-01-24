
import { ADD_USER } from '../constants/action-types'

const initialState = {
    loading : false,
    list : [],
    user: {}
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case ADD_USER:
            return {
                ...state,
                loading: false
                // user: action.payload
                
            }
    }

    return state;


}

export default userReducer;