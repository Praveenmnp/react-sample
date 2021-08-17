import React from 'react';

import { calcTime,convertMoney } from '../../helpers';

//styles
import { Wrapper,Content } from './MovieInfoBar.styles';

export const MovieInfoBar = ({time,revenue,budget})=>(
    <Wrapper>
        <Content>
            <div className="column">
                <p>
                    Runtime : {calcTime(time)}
                </p>
            </div>
            <div className="column">
                <p>
                    Budget : {convertMoney(budget)}
                </p>
            </div>
            <div className="column">
                <p>
                    Revenue : {convertMoney(revenue)}
                </p>
            </div>
        </Content>
    </Wrapper>
)