import styled from 'styled-components';
import { colors } from '../../../db.json';


export const LoginScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to right, ${colors['dark-blue']},${colors.blue} );
    `;

export const LoginBox = styled.div`
    border-radius: 1rem;
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 13.5vh;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;
    box-shadow: 4px 3px 7px ${colors.pink};
    background-image: linear-gradient(to bottom, ${colors.cyan},${colors.blue} );
`;

export const Header = styled.header`
    height: 10%;
    width: 100%;
    margin-bottom: 2rem;
    h2{
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
        color: ${colors['dark-blue']};
        font-family: 'Fredoka One', cursive;
    }
    `;

export const InputLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        background-color: ${colors.blue};
        font-size: 1.8rem;
        border-radius: 0.4rem 0 0 0.4rem;
    }
`;

export const Input = styled.input`
    border-radius: 0.4rem;
    display: block;
    height: 10%;
    width: 40vw;
    background-color: ${colors.blue};
    color: ${colors.cyan};
    outline: none;
    font-size: 1.5rem;
    padding: 1rem;
    font-family: 'Fredoka One', cursive;
    &:focus{
        background-color: ${colors['dark-blue']};
        color: ${colors.pink};
    }
`;

export const Submit = styled.div`
    font-family: 'Modak', cursive;  
    display: flex;
    justify-content: space-evenly;
    margin-top: 3rem;
    a{
        font-family: 'Modak', cursive;  
        text-decoration: none;
        color: ${colors['dark-blue']};
        font-size: 1.2rem;
        &:hover{
            opacity: 0.8;
        }
    }
`;


export const Button = styled.button`
    height: 8vh;
    width: 20vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    border-radius: 1rem;
    background: ${colors['dark-blue']};
    font-family: 'Modak', cursive;  
    font-size: 2rem;
    color: ${colors.purple};
`;

