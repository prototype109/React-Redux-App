import axios from 'axios';

//export const
export const NEW_SEARCH_REQUEST = 'NEW_SEARCH_REQUEST';

export const search = (animeName) => dispatch => {
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${animeName}`)
        .then(res => {
            console.log('RES', res);
        })
        .catch(err => {
            console.log('ERR', err);
        })
}