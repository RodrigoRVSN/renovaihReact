import styled from "styled-components";
import { colors } from "../../../db.json";

export const Background = styled.div`
  background-image: url(../img/181.jpg);
`;

export const Video = styled.video`
  border-bottom: 5px solid #000000;
  width: 100%;
  @media screen and (max-width: 800px) {
    margin-top: 10vh;
  }
`;

export const Card = styled.div`
  margin: 1rem 1rem 3rem 1rem;
  &:hover {
    transition: ease-in 0.2s;
    transform: scale(1.05);
    box-shadow: 3px 3px 15px ${colors.pink};
    cursor: pointer;
  }
  &:not(:hover) {
    transition: ease-in 0.1s;
    transform: scale(1);
  }
`;

export const Cardes = styled.div`
  padding-bottom: 7vh;
`;

export const CardBody = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  background-color: #f5eeee;
  h2 {
    font-family: "Fredoka One", cursive;
    font-size: 1.2rem;
    color: ${colors.purple};
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    font-weight: bold;
    text-align: center;
  }
  h3 {
    padding: 0 1rem 0 1rem;
    font-family: "Fredoka One", cursive;
    color: ${colors.blue};
    font-size: 1rem;
  }
`;
