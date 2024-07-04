import React from "react";
import chek from "../../../assets/chek.png";
import tour1 from "../../../assets/tour/cs2.png";
import tour2 from "../../../assets/tour/design & 2d.png";
import tour3 from "../../../assets/tour/dron demonstration.png";
import tour4 from "../../../assets/tour/hakaton.png";
import tour5 from "../../../assets/tour/mobilography.png";
import tour6 from "../../../assets/tour/robotics.png";

import "./TournamentsSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const TournamentsSection = () => {
  return (
    <div className="bg5">
      <div className="container">
        <div className="tourBlock_main">
          <p className="tourText_block">
            ТЕМАТИЧЕСКИЕ
            <br />
            <span className="tourText_bigger">РАЗДЕЛЫ</span>
            <br />
            <span className="tourText_big">ФЕСТИВАЛЯ</span>
          </p>
          <p className="tourText_small">Турниры по направлениям</p>
          <img src={chek} alt="error" className="tourBlock_img" />
        </div>
        <div className="tourFork_blockParent">
          <div className="tourFork_block">
            <img src={tour1} alt="error" className="tourForkimg1" />
            <img src={tour2} alt="error" className="tourForkimg2" />
            <img src={tour3} alt="error" className="tourForkimg3" />
            <img src={tour4} alt="error" className="tourForkimg4" />
            <img src={tour5} alt="error" className="tourForkimg5" />
            <img src={tour6} alt="error" className="tourForkimg6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentsSection;
