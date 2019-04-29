import{
    GET_POKEMON_DETAILS,
    FEED_DETAILS,
    GET_DETAILS_FAIL,
    DETAILS_SUCCESS,
    BACK_TO_PREV
} from "../constants/details"

const initialState = {
    isFetched_details:false,
    height:0,
    weight:0,
    stats:[],
    type:[],
    error_details:null,
    id:0
}

export default function(state = initialState,action){
    console.log("action:::::::::",action);
    
    switch (action.type) {
        case GET_POKEMON_DETAILS:
            return {
                ...state,
                isFetched_details:true
            }
            case FEED_DETAILS:
            return {
                ...state,
                height:action.payload.height/10,
                weight:action.payload.weight/10,
                stats:action.payload.stats.reverse(),
                type:action.payload.types.reverse(),
                id:action.payload.id
            }
            case GET_DETAILS_FAIL:
            return{
                ...state,
                error_details:action.payload
            }
            case BACK_TO_PREV:
            return {
                ...state,
                isFetched_details:false
            }
          
        default:
        return state
    }
}

