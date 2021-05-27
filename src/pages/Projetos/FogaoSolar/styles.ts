import styled from 'styled-components';
import { colors } from '../../../db.json';

export const Parent = styled.div`
    display: flex;
`;

export const Sidebar = styled.div`
    width: 20%;
    height: 100%;
    position: fixed;
    @media screen and (max-width:800px){
        background-color: ${colors.blue};
        width: 100%;
        height: 5%;
    }
`;

export const Content = styled.div`
    position: absolute;
    margin-left: 20%;
    margin-top: 10vh;
    width: 80%;
    height: 100%;
    padding: 0 3%;
    @media screen and (max-width:800px){
        display: block;
        margin-right: auto;
        margin-left: auto;
        width: 100%;
    }
`;

export const Descricao = styled.section`
    position: relative;
     h2{

        color: #343a40;
        font-size: 46px;
    }
    h2 > span {
        font-size: 46px;
        color: blueviolet;
    }
    h3{
        margin: 15px 0;
        color: #6c757d;
        font-size: 26px;
    }
    h3 > span{
        font-size: 26px;
        color: blueviolet;
    }
    p{
        color:  #6c757d;
        font-size: 18px;
    } 
    @media screen and (max-width:800px){
        height: 80%;
        overflow-y: scroll;
        margin-top: 10rem;
    }
    iframe{
        width: 55vw;
        height: 55vh;
        @media screen and (max-width:800px){
            height: 60vh;
            width: 80vw;
        }
    }
`;

export const ImgP1 = styled.div`
    margin-top: 1rem;
    width: 50vw;
    @media screen and (max-width:800px){
        width: 80vw;
    }
`;

