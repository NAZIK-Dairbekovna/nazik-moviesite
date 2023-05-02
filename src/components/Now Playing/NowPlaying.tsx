import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/movieDispatch";
import {useAppSelector} from "../../hooks/movieSelector";
import {fetchingNowPlaying} from "../../store/Reducer/FetchingNowPlaying";

const NowPlaying = () => {
    const dispatch = useAppDispatch()
    const {movies} = useAppSelector(state => state.movieSlice)
    useEffect(() => {
        dispatch(fetchingNowPlaying)
    }, [])
    return (
        <div className="nowPlaying">
            <div className="container">
                <div className="movies">
                    {
                        movies.map(el => (
                            <div className="card">
                                <img className="image" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
                                <div className="rating-circle">
                                    <div className="rating">
                                        <h4 style={{display: "flex",
                                            alignItems: "flex-start"}}>
                                            {el.vote_average}
                                            <p style={{fontSize: "5px", marginTop: "3px"}}>%</p>
                                        </h4>
                                    </div>
                                </div>
                                <div style={{width: "120px"}}>
                                    <h2>{el.title}</h2>
                                </div>
                                <h3>{el.release_date}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default NowPlaying;