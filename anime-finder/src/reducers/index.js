import { NEW_SEARCH_REQUEST, ERROR, FETCHING_REQUEST } from '../actions';

const initialState = {
    animeList: [],
    error: false,
    isFetching: false
}

const animeReducer = (state = initialState, action) => {
    switch(action.type){
        case NEW_SEARCH_REQUEST:
            return {
                ...state,
                animeList: action.payload,
                error: false,
                isFetching: false
            }
        case ERROR:
            return{
                ...state,
                isFetching: false,
                error: true
            }
        case FETCHING_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        default:
            return state;
    }
}

export default animeReducer;