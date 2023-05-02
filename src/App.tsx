import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import NowPlaying from "./components/Now Playing/NowPlaying";
import Popular from "./components/Popular/Popular";
import TopRated from "./components/TopRated/TopRated";
import Upcoming from "./components/Upcoming/Upcoming";
import Home from "./components/Home/Home";
import MovieDetail from "./components/pages/MovieDetail/MovieDetail";
import ActorsDetail from "./components/pages/ActorsDetail/ActorsDetail";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/NowPlaying'} element={<NowPlaying/>}/>
            <Route path={'/Popular'} element={<Popular/>}/>
            <Route path={'/TopRated'} element={<TopRated/>}/>
            <Route path={'/Upcoming'} element={<Upcoming/>}/>
            <Route path={'/movieDetail/movie-info/:movieId'} element={<MovieDetail/>}/>
            <Route path={'/actorDetail/actor-info/:actorId'} element={<ActorsDetail/>}/>
        </Routes>
    </div>
  );
}

export default App;
