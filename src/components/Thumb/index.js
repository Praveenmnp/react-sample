import React from 'react'
//route
import { Link } from 'react-router-dom';
//styles
import { Image } from './Thumb.styles';

const Thumb = ({movieId,image,clickable}) => {
    return ( 
        <div>
        {clickable ?(
        <Link to={`${movieId}`}>
            <Image src={image} alt='movie-thumb'></Image>
        </Link>
        ):(<Image src={image} alt='movie-thumb'></Image>)}
        </div>
    );
}
 
export default Thumb;