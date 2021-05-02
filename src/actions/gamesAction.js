import axios from 'axios';
import {popularGamesURL,upcomingGamesURL,newGamesURL,searchGameURL} from '../api';

export const loadGames = () => async (dispatch) => {
    //FETCH AXIOS
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newGameData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGameData.data.results
        },
    })
}

export const fetchSearch = (game_name) => async(dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCH",
        payload: {
            searched: searchGames.data.results,
        },
    });
}