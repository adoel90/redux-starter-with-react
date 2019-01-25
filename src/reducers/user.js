
import { ADD_USER, CREATE_USER } from '../constants/action-types'


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
                loading: false,
                user: action.data
            }

        case CREATE_USER.PENDING:
            return {
                ...state,
                loading: true
            }

        case CREATE_USER.SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.data
            }

        case CREATE_USER.ERROR:
            return {
                ...state,
                loading: false
            }
    }

    return state;


}

export default userReducer;