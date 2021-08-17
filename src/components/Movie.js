import React from 'react';
import { useParams } from 'react-router';

//config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';


//img
import Noimg from '../images/no_image.jpg'

//hooks
import { useMovieFetch } from '../hooks/useMovieFetch';

//components
import { Grid } from './Grid';
import Spinner from './Spinner';
import { BreadCrumb } from './BreadCrumb';
import { MovieInfo } from './MovieInfo';
import { MovieInfoBar } from './MovieInfoBar';
import {Actor} from './Actor';

export const Movie = () =>{
    const {movieId} = useParams();
    const {state:movie,loading,error} = useMovieFetch(movieId);
    if (error) return <div>Something went Wrong</div>;
    if (loading) return <Spinner/>;

            return (
            <>
            <BreadCrumb movieTitle={movie.original_title} hero={movie.hero}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue ={movie.revenue}
            />
            <Grid header='Actors'>
            {movie.actors.map(actor => (
                <Actor
                key={actor.credit_id}
                name={actor.name}
                character={actor.character}
                imageUrl={
                    actor.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    : Noimg
                }
                />
            ))}
            </Grid>
            </>
        )
}