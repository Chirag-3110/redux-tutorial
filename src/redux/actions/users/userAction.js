import { authtypes } from "../../constants/userConstant"

const setUsers=(users)=>{
    return {
        type:authtypes.SET_USERS,
        payload:users
    }
}
const setFethcingUserStart=()=>{
    return {
        type:authtypes.IS_FETCHING_START,
    }
}
const setFethcingUserEnd=()=>{
    return {
        type:authtypes.IS_FETCHING_START,
    }
}
const setError=(error)=>{
    return {
        type:authtypes.IS_ERROR,
        payload:error
    }
}
export {
    setUsers,
    setFethcingUserStart,
    setFethcingUserEnd,
    setError
}