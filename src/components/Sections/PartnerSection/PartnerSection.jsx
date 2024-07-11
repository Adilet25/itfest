import React from "react";
import logo1 from "../../../assets/partnerslogo/logo1.svg";
import logo2 from "../../../assets/partnerslogo/logo2.svg";
import logo3 from "../../../assets/partnerslogo/logo3.svg";
import logo4 from "../../../assets/partnerslogo/logo4.svg";
import logo5 from "../../../assets/partnerslogo/logo5.svg";
import logo6 from "../../../assets/partnerslogo/logo6.svg";
import logo7 from "../../../assets/partnerslogo/logo7.svg";
import logo8 from "../../../assets/partnerslogo/logo8.svg";
import logo9 from "../../../assets/partnerslogo/logo9.svg";
import logo10 from "../../../assets/partnerslogo/logo10.svg";
import logo11 from "../../../assets/partnerslogo/logo11.svg";
import logo12 from "../../../assets/partnerslogo/logo12.svg";
import logo13 from "../../../assets/partnerslogo/logo13.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./PartnerSection.css";
import { Autoplay } from "swiper/modules";

const PartnerSection = () => {
  return (
    <div className="bg4">
      <div className="partnerBlock_main">
        <div className="partnerBlock_mini partnerMini_0">
          <h2>Генеральный спонсор</h2>
          <div className="parnterBlock_imgs0">
            <img src={logo8} alt="error" />
          </div>
        </div>
        <div className="partnerBlock_mini partnerMini_1">
          <h2>Партнёры</h2>
          <div className="parnterBlock_imgs1">
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
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={logo9} alt="error" className="swiperImgs" />
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
                <img src={logo5} alt="error" className="swiperImgs" />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <img src={logo13} alt="error" className="swiperImgs" />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <img src={logo3} alt="error" className="swiperImgs" />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <img src={logo7} alt="error" className="swiperImgs imgneko" />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* </div> */}
        </div>
        <div className="partnerBlock_mini partnerMini_3">
          <h2>Horeca партнёры</h2>
          <div className="parnterBlock_imgs">
            <img src={logo4} alt="error" />
            <img src={logo1} alt="error" />
            <img src={logo2} alt="error" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
