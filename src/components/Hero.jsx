import "../styles/hero.css";
import React, { useState } from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { topOffers } from "../constants/topOffers";
import { AiOutlinePercentage } from "react-icons/ai";

const Hero = () => {
  const [i, setI] = useState(1);

  return (
    <div className="Hero">
      <div className={`hero_image_container`}>
        <img
          src={`/slider_${i}.webp`}
          alt={topOffers[i].heading}
          className="w-full h-full object-fill"
        />

        <div className="hero_details">
          <div>
            <div className="hero_heading">{topOffers[i].heading}</div>
            <div className="hero_sale">
              SALE UP TO &nbsp;
              {topOffers[i].sale}
              <AiOutlinePercentage /> &nbsp;OFF
            </div>
          </div>
          <div className="hero_btn">Shop Now</div>
        </div>
        <div>{topOffers[i].detail}</div>
      </div>
      <div>
        <BiArrowToLeft
          className="skip_icon left-0"
          onClick={() =>
            setI((prev) => {
              if (prev === 1) {
                return (prev = 6);
              }
              return prev - 1;
            })
          }
        />
        <BiArrowToRight
          className="skip_icon right-0"
          onClick={() =>
            setI((prev) => {
              if (prev === 6) {
                return (prev = 1);
              }
              return prev + 1;
            })
          }
        />
      </div>
      <div className="hero_dots">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div
            key={index}
            className={`dot ${i === index && "bg-slate-700 w-4"}`}
            onClick={() => setI(index)}
          >
            {index}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
