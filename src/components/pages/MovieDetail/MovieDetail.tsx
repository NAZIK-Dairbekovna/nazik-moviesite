import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../hooks/movieDispatch";
import {useAppSelector} from "../../../hooks/movieSelector";
import {fetchingMovDetail} from "../../../store/Reducer/FetchingMovDetail";

const MovieDetail = () => {
    const dispatch = useAppDispatch()
    const {movies} = useAppSelector(state => state.movieSlice)
    useEffect(() => {
        dispatch(fetchingMovDetail)
    }, [])
    return (
        <div className="movieDetail">
            <div className="container">
                <div className="movies-detail">
                    {
                        movies.map(el => (
                            <div>
                                <div>
                                    <img className="movie-detail-img"
                                         src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                         alt=""/>
                                </div>
                                <div className="movie-overview">
                                    <h1>{el.title}</h1>
                                    <h2>{el.release_date}</h2>
                                    <h3>{el.overview}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;