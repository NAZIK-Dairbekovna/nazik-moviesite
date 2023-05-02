import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../hooks/movieDispatch";
import {useAppSelector} from "../../../hooks/movieSelector";
import {fetchingActorsDetail} from "../../../store/Reducer/FetchingActorsDetail";

const ActorsDetail = () => {
    const dispatch = useAppDispatch()
    const {movies} = useAppSelector(state => state.movieSlice)
    useEffect(() => {
        dispatch(fetchingActorsDetail)
    }, [])
    return (
        <div>
            <div className="container">
                <div className="actors-detail">
                    {
                        movies.map(el => (
                            <div>
                                <h1>{el.title}</h1>
                                <h2>{el.release_date}</h2>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default ActorsDetail;