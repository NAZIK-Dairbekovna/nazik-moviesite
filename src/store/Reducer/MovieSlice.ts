import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovie} from "../../types/IMovie";

interface IMovieState {
    movies: IMovie[]
    loading: boolean
    error: string
}

const initialState: IMovieState = {
    movies: [],
    loading: false,
    error: ""
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        movieFetching(state) {
            state.loading = true
        },
        movieFetchingSuccess(state, action: PayloadAction<IMovie[]>) {
            state.loading = false
            state.movies = action.payload
            state.error = ""
        },
        movieFetchingError(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default movieSlice.reducer
export const {movieFetching, movieFetchingSuccess, movieFetchingError} = movieSlice.actions

