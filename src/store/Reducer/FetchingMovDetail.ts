import {AppDispatch} from "../store";
import {movieFetching, movieFetchingError, movieFetchingSuccess} from "./MovieSlice";
import axios from "axios";
import {APIKEY} from "../../lib/apiKey";

export const fetchingMovDetail = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try{
            dispatch(movieFetching())
            const responsive = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`)
            const {data} = responsive
            dispatch(movieFetchingSuccess(data.results))
        } catch (e: any) {
            dispatch(movieFetchingError(e.message))
        }
    }
}