import React from "react";
import "./PacketSection.css";

const PacketSection = () => {
  return (
    <div className="packetMain_block">
      <h2 className="packet_Main_text">ПАКЕТЫ УЧАСТИЯ</h2>
      <div className="packetVariants">
        <div className="packetVariants_block var1">
          <h3 className="packetVar_text">БЕСПЛАТНЫЙ</h3>
          <img src="" alt="" className="packetiMG packetImg1" />
          <p className="packetPrice">0 сом</p>
          <p className="packetBtn packBtn1">Подробнее</p>
        </div>
        <div className="packetVariants_block var2">
          <h3 className="packetVar_text">СТАНДАРТ</h3>
          <img src="" alt="" className="packetiMG packetImg2" />
          <p className="packetPrice">5000 сом</p>
          <p className="packetBtn packBtn2">Подробнее</p>
        </div>{" "}
        <div className="packetVariants_block var3">
          <h3 className="packetVar_text">ЛЮКС</h3>
          <img src="" alt="" className="packetiMG packetImg3" />
          <p className="packetPrice">10 000 сом</p>
          <p className="packetBtn packBtn3">Подробнее</p>
        </div>
      </div>
    </div>
  );
};

export default PacketSection;
