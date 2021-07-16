import axios from "axios";

export const GET_SONGS = 'GET_SONGS';

const API_URL = 'https://itunes.apple.com/search?term=Michael+jackson';
const BASE_URL = `${API_URL}`;

export const getSongs = () => {
    try {
        return async dispatch => {
            const response = await axios.get(`${BASE_URL}`)
            if(response.data) {
                dispatch({
                    type: GET_SONGS,
                    payload: response.data
                });
            } else {
                console.log('Unable to fetch');
            }
        }
        
    } catch (error) {
        
    }
}