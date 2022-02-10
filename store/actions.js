import axios from "axios";

//getAlbum takes the commit and state arguments.
//axios gets the albums using the public album search URL combined with a template literal of the search state and 
//the api key within the env file.
//the data response is them committed to the SET_ALBUM mutation.
//the album search template literal is set to a search state
export const getAlbum = ({commit, state}) => {
    axios.get(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${state.search}&api_key=${process.env.apiKey}&format=json`)
    .then( response => {
        console.log(response.data.results.albummatches);
        commit("SET_ALBUM", response.data.results.albummatches);
        commit("SEARCH", state.search);
    }).catch(error => {
        console.log(error);
    });
}
