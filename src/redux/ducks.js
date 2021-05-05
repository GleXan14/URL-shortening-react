import axios from 'axios';

//constants
const initialData = {
    array: []
}

//types
const GET_DATA = 'GET_DATA';

//reducer
export default function reducer(state = initialData, action) { 

    switch(action.type){
        case GET_DATA:
            return {...state, array: action.payload}
        default:
            return state
    }
}

//actions
export const getDataAction = (link) => async (dispatch, getState)=>{
    try{
        const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`);
        dispatch({
            type: GET_DATA,
            payload: res.data
        })

    }catch(error){
        console.error(error);
    }
}