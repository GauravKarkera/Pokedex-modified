import {
    GET_POKEMON_DETAILS,
    FEED_DETAILS,
    GET_DETAILS_FAIL,
    DETAILS_SUCCESS,
    BACK_TO_PREV
} from "../constants/details"

export function getdetails(id) {
    return dispatch => {
        dispatch({
            type: GET_POKEMON_DETAILS
        })
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(`${response.status}: ${response.statusText}`)
        })
            .then(data => {
                
                console.log(data);
                dispatch({
                    type: FEED_DETAILS,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_DETAILS_FAIL,
                    payload: error.message
                })
            })

    }
}

export function backToPrev(){
    return dispatch =>{
        console.log("Inside back2 prev");

        dispatch({
            
            type:BACK_TO_PREV
        })
    }
}