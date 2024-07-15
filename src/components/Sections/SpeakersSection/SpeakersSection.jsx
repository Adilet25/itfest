import React from "react";
import showimg from "../../../assets/headliners.png";
import speak2 from "../../../assets/speakers/IMG_4335.jpg";
import speak3 from "../../../assets/speakers/IMG_4337.jpg";
import speak4 from "../../../assets/speakers/IMG_4336.jpg";
import speak5 from "../../../assets/speakers/IMG_4338.jpg";

import animators from "../../../assets/showprogramm/animators.png";
import artobjects from "../../../assets/showprogramm/artobjects.png";
import cinema from "../../../assets/showprogramm/cinema.png";
import cosplay from "../../../assets/showprogramm/cosplay.png";
import laser from "../../../assets/showprogramm/laser.png";
import photobudka from "../../../assets/showprogramm/photobudka.png";
import puzir from "../../../assets/showprogramm/puzir.png";
import dabce from "../../../assets/showprogramm/dabce.png";

import "./SpeakersSection.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

const SpeakersSection = () => {
  return (
    <div className="bg9">
      <div className="container">
        <div className="speakBlock_main">
          <h2 className="speakBlock_title">СПИКЕРЫ</h2>
          <div className="speakList">
            <div className="speakBlock_card">
              <img src={speak2} alt="" className="speakBlock_circle" />
              <h3>Айжан Алишерова-Дуймаз</h3>
              <p>
                Прошла обучение в школе трекеров в июле этого года и теперь
                является бизнес-трекером Accelerate Prosperity.
              </p>
            </div>
            <div className="speakBlock_card">
              <img src={speak3} alt="" className="speakBlock_circle" />
              <h3>Динара Руслан</h3>
              <p>
                Генеральный директор CODIFY, советник премьер-министра КР
                (инновации, ИТ, развитие, автоматизация, ИТ-стартапы)
              </p>
            </div>

            <div className="speakBlock_card">
              <img src={speak4} alt="" className="speakBlock_circle" />
              <h3>Жылдыз Исабекова</h3>
              <p>
                Страновой директор Accelerate Prosperity.Окончила факультет
                востоковедения и международных отношений в БГУ. Прошла
                стажировку в Тяньцзиньском университете в Китае
              </p>
            </div>
            <div className="speakBlock_card">
              <img src={speak5} alt="" className="speakBlock_circle" />
              <h3>Пархад Базаков</h3>
              <p>Применение ИИ в стартапах ,senior data scientist</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="showBlock_main">
        <h2 className="showBlock_title">ШОУ-ПРОГРАММА</h2>
        <h3 className="showBlock_title2">Хэдлайнеры</h3>
        <img src={showimg} alt="error" className="showBlock_img" />
        <div className="showBlock_img">
          <img src={cosplay} alt="" />
          <img src={animators} alt="" />
          <img src={cinema} alt="" />
          <img src={photobudka} alt="" />
          <img src={puzir} alt="" />
          <img src={artobjects} alt="" />
          <img src={dabce} alt="" />
          <img src={laser} alt="" />
        </div>
      </div> */}
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          navigation={true}
          coverflowEffect={{
            rotate: -50,
            stretch: 100,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            425: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="showSwip"
        >
          <SwiperSlide>
            <img src={cosplay} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cinema} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photobudka} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={animators} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={puzir} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={artobjects} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dabce} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={laser} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SpeakersSection;
