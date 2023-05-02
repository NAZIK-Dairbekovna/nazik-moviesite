import {movieFetching, movieFetchingError, movieFetchingSuccess} from "./MovieSlice";
import axios from "axios";
import {APIKEY} from "../../lib/apiKey";
import {AppDispatch} from "../store";

export const fetchingPopular = async (dispatch: AppDispatch) => {

    try{
        dispatch(movieFetching())
        const responsive = await axios.get(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${APIKEY}&language=en-US`)
        const {data} = responsive
        dispatch(movieFetchingSuccess(data.results))

    } catch (e: any) {
        dispatch(movieFetchingError(e.message))
    }
}