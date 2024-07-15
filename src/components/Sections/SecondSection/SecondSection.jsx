import React from "react";
import resimg from "../../../assets/resimg.svg";
import kgpat from "../../../assets/kgpat.svg";

import logo1 from "../../../assets/sponsorslogo/logo1.svg";
import logo2 from "../../../assets/sponsorslogo/logo2.svg";
import logo3 from "../../../assets/sponsorslogo/logo3.svg";
import logo4 from "../../../assets/sponsorslogo/logo4.svg";
import logo5 from "../../../assets/sponsorslogo/logo5.svg";
import logo6 from "../../../assets/sponsorslogo/logo6.svg";
import logo7 from "../../../assets/sponsorslogo/logo7.svg";
import logo8 from "../../../assets/sponsorslogo/logo8.svg";
import logo9 from "../../../assets/partnerslogo/logo8.svg";
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

import { Swiper, SwiperSlide } from "swiper/react";

import kia from "../../../assets/sponsorslogo/kia.svg";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import "../SecondSection/SecondSection.css";

const SecondSection = () => {
  return (
    <div className="bg3">
      <div className="secondBlock_org">
        <p id="secondBlock_text">Организаторы</p>
        <div className="secondBlock_sponsors">
          {/* <img src={logo4} alt="" /> */}
          <img src={logo2} alt="" />
          <img src={logo6} alt="" />
          <img src={kgpat} alt="error" id="" />
          <img src={resimg} alt="" />
          {/* <img src={kia} alt="" /> */}
          <img src={logo1} alt="" />
          {/* <img src={logo7} alt="" /> */}
        </div>
      </div>
      <div className="secondBlock_main">
        <div className="secondMain_first">
          <h2>О мероприятии</h2>
          <p>
            IT FEST 2024 "CYBER КӨЛ" — это крупнейшее технологическое событие в
            Кыргызстане, посвященное инновациям в сфере информационных
            технологий.
          </p>
          <p>
            Организуемое в формате фестиваля, IT FEST собирает ведущих
            специалистов, стартапы, инвесторов, студентов и энтузиастов
            технологий для обмена опытом, демонстрации последних технологических
            достижений и создания новых партнерских связей.
          </p>
        </div>
        <div className="secondMain_third">
          <div>
            <p className="fs2">2 </p>
            <p>дня</p>{" "}
          </div>
          <div>
            <p className="fs2">7000 </p>
            <p>посетителей</p>{" "}
          </div>
          <div>
            <p className="fs2">12+ </p>
            <p>направлений</p>{" "}
          </div>
          <div>
            <p className="fs2">3000 </p>
            <p>участников</p>{" "}
          </div>
          <div>
            <p className="fs2">10 </p>
            <p>тематических зон</p>{" "}
          </div>
          <div>
            <p className="fs2">30+ </p>
            <p>спикеров</p>{" "}
          </div>
          <div>
            <p className="fs2">5 </p>
            <p>стран</p>{" "}
          </div>
          <div>
            <p className="fs2">3 000 000 </p>
            <p>медиа охватов</p>{" "}
          </div>
          <div>
            <p className="fs2">1500 </p>
            <p>кв. м экспозиций</p>{" "}
          </div>
        </div>
        <div className="secondMain_second">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gHgD57ytup0?si=qqb-GzT0a_TA_Ger"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="secondMain_spon">
          <h2>Генеральный спонсор</h2>
          <div className="secondSpon_img">
            <img src={logo9} alt="error" />
          </div>
        </div>
      </div>
      <div className="secPartner">
        <h2>Партнёры</h2>
        <div className="secPartner_img">
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
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={logo14} alt="error" className="swiperImgs" />
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
    </div>
  );
};

export default SecondSection;
