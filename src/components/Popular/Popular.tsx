import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/movieDispatch";
import {useAppSelector} from "../../hooks/movieSelector";
import {fetchingPopular} from "../../store/Reducer/FetchingPopular";
import {NavLink} from "react-router-dom";


const Popular = () => {
    const dispatch = useAppDispatch()
    const {movies} = useAppSelector(state => state.movieSlice)
    useEffect(() => {
        dispatch(fetchingPopular)
    }, [])
    return (
        <div className="popular">
            <div className="container">
                <div className="movies">
                    {
                        movies.map(el => (
                                <div className="card">
                                    <NavLink to={`/movieDetail/movie-info/:movieId`}>
                                        <div>
                                            <img className="image"
                                                 src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
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
                                    </NavLink>
                                </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
export default Popular;