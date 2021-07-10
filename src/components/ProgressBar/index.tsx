import React, { useState } from "react";

import styled from "styled-components";
import { colors } from "../../db.json";

const BarProgress = styled.div`
  position: fixed;
  span {
    font-size: 4rem;
  }

  > div {
    flex: 1;
    height: 1.25vh;
    border-radius: 0 0 10px 10px;
    background: linear-gradient(
      to right,
      ${colors.purple},
      ${colors["dark-blue"]}
    );
    position: relative;
  }

  > div > div {
    border-radius: 1rem;
    height: 1.5vh;
    background: linear-gradient(to right, ${colors.blue}, ${colors.cyan});
  }
`;

const Button = styled.button`
  display: block;
  margin-bottom: 7rem;
  margin-top: auto;
  height: 1rem;
  color: ${colors.purple};

  i {
    font-size: 5rem;
    color: ${colors["dark-blue"]};
    &:hover {
      color: ${colors.pink};
    }
  }
  @media screen and (max-width: 800px) {
    i {
      color: ${colors.pink};
      position: fixed;
      margin-top: -4rem;
      font-size: 3rem;
    }
    margin: 4rem 2rem auto -1rem;
  }
`;

interface totalProps {
  total: number;
}

export const ProgressBar = ({ total }: totalProps) => {
  let [progress, setProgress] = useState(0);
  let porcent = 1 / ((total - 1) / 100);

  const progressNext = () => {
    progress >= 100 ? setProgress(0) : setProgress(progress + porcent);
  };
  const progressBack = () => {
    progress <= 0 ? setProgress(100) : setProgress(progress - porcent);
  };

  if (progress < 0) setProgress(0);

  if (progress !== 0) {
    var videos = document.querySelectorAll("iframe, video");
    Array.prototype.forEach.call(videos, function (video) {
      if (video.tagName.toLowerCase() === "video") {
        video.pause();
      } else {
        var src = video.src;
        video.src = src;
      }
    }); // pausa o vídeo ao clique
  }

  return (
    <>
      <BarProgress>
        <div style={{ width: "100vw" }}>
          <div style={{ width: `${progress}%` }} />
        </div>
      </BarProgress>

      <Button
        onClick={progressBack}
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="visually-hidden">Previous</span>
        <div>
          <i className="fas fa-arrow-circle-left"></i>
        </div>
      </Button>

      <Button
        onClick={progressNext}
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon visually-hidden">Next</span>
        <div>
          <i className="fas fa-arrow-circle-right "></i>
        </div>
      </Button>
    </>
  );
};
