import { NEW_SEARCH_REQUEST } from '../actions';

const initialState = {
    animeList: []
}

const animeReducer = (state = initialState, action) => {
    switch(action.type){
        case NEW_SEARCH_REQUEST:
            return {
                ...state,
                animeList: action.payload
            }
        default:
            return state;
    }
}

export default animeReducer;