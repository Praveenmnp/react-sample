import React from 'react';

//config
import { Wrapper,Content } from './BreadCrumb.styles';

//route
import { Link } from 'react-router-dom';


export const BreadCrumb =({movieTitle,hero})=>{
    return(
        <Wrapper>
            <Content>
                <Link to='/'>
                    <span>Home</span>
                </Link>
                <span>
                    |
                </span>
                <span>
                    {movieTitle}
                </span>
                <span>
                    |
                </span>
                <span>
                    {hero}
                </span>
            </Content>
        </Wrapper>

    )
};