import React from "react";
import "../responsividade/styles.css";
import styled from "styled-components";
import { colors } from "../../db.json";

const GifStyle = styled.img`
  display: flex;
  margin: auto;
  width: 15rem;
  border: 5px solid #ffffff;
  border-radius: 50%;
  background-color: ${colors.cyan};
  @media screen and (max-width: 800px) {
    width: 10rem;
  }
`;

export const Gif = () => {
  return (
    <>
      <GifStyle src="https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif" />
    </>
  );
};
