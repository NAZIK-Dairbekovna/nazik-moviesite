import {AppDispatch} from "../store";
import {movieFetching, movieFetchingError, movieFetchingSuccess} from "./MovieSlice";
import axios from "axios";
import {APIKEY} from "../../lib/apiKey";

export const fetchingUpcoming = async (dispatch: AppDispatch) => {
    try{
        dispatch(movieFetching())
        const responsive = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = responsive
        dispatch(movieFetchingSuccess(data.results))
    } catch (e: any) {
        dispatch(movieFetchingError(e.message))
    }
}