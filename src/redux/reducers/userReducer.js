import { authtypes } from "../constants/userConstant";

const initialState={
    users:[],
    isfetching:false,
    error:null
}

const userReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case authtypes.SET_USERS:
            return {
                ...state,users:[...actions.users]
            }
        case authtypes.IS_FETCHING_START:
            return {
                ...state,isfetching:true
            }
        case authtypes.IS_FETCHING_END:
            return {
                ...state,isfetching:false
            }
        case authtypes.IS_ERROR:
            return {
                ...state,error:actions.payload
            }
        default:
            return state;
    }
}

export default userReducer;