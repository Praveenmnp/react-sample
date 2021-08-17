import React from 'react';

//components
import Thumb from '../Thumb';

//img
import NoImg from '../../images/no_image.jpg';

//config
import { IMAGE_BASE_URL,POSTER_SIZE } from '../../config';

//styles
import { Wrapper,Content,Text } from './MovieInfo.styles';


export const MovieInfo = ({movie}) =>(
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`:
                     NoImg}
                clickable={false}
            />
        </Content>
        <Text>
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>

        <div className='rating-directors'>
          <div>
            <h3>RATING</h3>
            <div className='score'>{movie.vote_average}</div>
          </div>
          <div className='director'>
            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
            {movie.directors.map(director => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>
      </Text>
    </Wrapper>
)