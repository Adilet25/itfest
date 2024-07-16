import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import logo14 from "../../../assets/partnerslogo/logo3.svg";
import logo17 from "../../../assets/partnerslogo/logo5.svg";
import logo15 from "../../../assets/partnerslogo/logo9.svg";
import logo10 from "../../../assets/partnerslogo/logo10.svg";
import logo11 from "../../../assets/partnerslogo/logo11.svg";
import logo12 from "../../../assets/partnerslogo/logo12.svg";
import logo13 from "../../../assets/partnerslogo/logo13.svg";
import logo16 from "../../../assets/partnerslogo/logo7.svg";
import logo19 from "../../../assets/partnerslogo/logo1.svg";
import logo20 from "../../../assets/partnerslogo/logo2.svg";
import logo18 from "../../../assets/partnerslogo/logo4.svg";
import secret from "../../../assets/partnerslogo/secret.svg";
import profile from "../../../assets/partnerslogo/profile.svg";

import "./PartnerSectionn.css";

const PartnerSection = () => {
  return (
    <div className="partnerBlock">
      <div className="partnerRank_block">
        <div className="partnerRank2">
          <h2 className="partnerBlock_title">Золотой спонсор</h2>
          <img src={secret} alt="" className="partSec" />
        </div>{" "}
        <div className="partnerRank1">
          <h2 className="partnerBlock_title">Генеральный спонсор</h2>
          <img src={secret} alt="" className="partSec bigSpon" />
        </div>{" "}
        <div className="partnerRank2">
          <h2 className="partnerBlock_title">Официальный спонсор</h2>
          <img src={secret} alt="" className="partSec" />
        </div>
      </div>
      <div className="partnerTour_block">
        <h2 className="partnerBlock_title">Спонсоры турниров</h2>
        <div className="partnerBlock_imgs">
          <img src={profile} alt="" />
          <img src={profile} alt="" />
          <img src={profile} alt="" />
          <img src={profile} alt="" />
          <img src={profile} alt="" />
          <img src={profile} alt="" />
          <img src={profile} alt="" id="lastTour" />
        </div>
      </div>
      <h2 className="partnerBlock_title">Партнёры</h2>
      <div className="partnerBlock_img">
        <Swiper
          speed={1500}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="parnterSwiper"
        >
          <SwiperSlide>
            <img src={logo14} alt="error" className="parnterSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo10} alt="error" className="swiperImgs imgneko" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={logo11} alt="error" className="swiperImgs" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={logo12} alt="error" className="swiperImgs" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={logo15} alt="error" className="swiperImgs" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={logo13} alt="error" className="swiperImgs" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={logo16} alt="error" className="swiperImgs" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={logo17} alt="error" className="swiperImgs imgneko" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo18} alt="error" className="swiperImgs imgneko" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo19} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo20} alt="error" className="swiperImgs" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerSection;
