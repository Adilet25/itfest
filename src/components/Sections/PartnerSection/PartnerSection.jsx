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
import logo2 from "../../../assets/sponsorslogo/logo2.svg";

import logo3 from "../../../assets/sponsorslogo/htp.svg";
import logo4 from "../../../assets/partnerslogo/klog.jpeg";
import logo5 from "../../../assets/tsum.png";
import logo18 from "../../../assets/partnerslogo/logo4.svg";
import secret from "../../../assets/partnerslogo/secret.svg";
import visa from "../../../assets/partnerslogo/visa.svg"
import profile from "../../../assets/partnerslogo/profile.svg";

import euro from "../../../assets/partnerslogo/europ.svg"
import kg from "../../../assets/partnerslogo/khob.svg"
import ktrk from "../../../assets/partnerslogo/ktr.svg"
import kak from "../../../assets/partnerslogo/kaktus.svg"
import rg from "../../../assets/partnerslogo/rg.svg"
import tv15 from "../../../assets/partnerslogo/tv15.svg"
import tv1 from "../../../assets/partnerslogo/gr2.svg"
import eltr from "../../../assets/partnerslogo/eltr.svg"
import gr from "../../../assets/partnerslogo/gr.svg"
import sxod from "../../../assets/partnerslogo/sxodim.svg"





import "./PartnerSectionn.css";

const PartnerSection = () => {
  return (
    <div className="partnerBlock">
      <div className="partnerRank_block">
      
        <div className="partnerRank1">
          <h2 className="partnerBlock_title">Генеральный спонсор</h2>
          <img src={visa} alt="" className="partSec bigSpon" />
        </div>{" "}
    
      </div>
      {/* <div className="partnerTour_block">
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
      </div> */}
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
            <img src={logo13} alt="error" className="swiperImgs" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={logo5} alt="error" className="swiperImgs" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={logo17} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo2} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo3} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo4} alt="error" className="swiperImgs" />
          </SwiperSlide>
        </Swiper>
      </div>
      <h2 className="partnerBlock_title">Медиа Партнёры</h2>
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
            <img src={euro} alt="error" className="parnterSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={kg} alt="error" className="swiperImgs imgneko" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={ktrk} alt="error" className="swiperImgs" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={kak} alt="error" className="swiperImgs" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={rg} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tv15} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tv1} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={eltr} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gr} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sxod} alt="error" className="swiperImgs" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerSection;
