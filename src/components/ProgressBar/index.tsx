import React from 'react';

import styled from "styled-components";
import { colors } from '../../db.json';

const BarProgress = styled.div`
    
    display:flex;
    align-items: center;
    
    span{
        font-size: 4rem;
    }

    > div{
        flex: 1;
        height: 4px;
        border-radius: 0 0 10px 10px;
        background: ${colors['dark-blue']};
        position: relative;
    }

    > div > div {
        height: 7px;
        background: ${colors.cyan};
    }
`;


export function ProgressBar() {
    const total = 100;
    const y = 20;
    return (
        <BarProgress>
            <div style={{ width: `${total}vw` }}>
                <div style={{ width: `${y}%` }} />
            </div>
        </BarProgress>
    );
}