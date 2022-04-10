import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    //gets all movies on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //maps through movies array for display in dynamically generated MovieItem components
    return (
        <main>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className="movieContainer" key={movie.id} >
                            <MovieItem
                                movie={movie}
                            />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;