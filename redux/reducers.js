import { GET_SONGS } from "./actions";

const initialState = {
    songsList: [],
}

function songsReducer( state = initialState, action) {
    switch (action.type) {
        case GET_SONGS:
            return {...state, songsList: action.payload};
        default:
            return state
    }
}

export default songsReducer