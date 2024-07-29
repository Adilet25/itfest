import React, { useState } from "react";
import "./PacketSection.css";
import htp from "../../../assets/sponsorslogo/htp.svg"
import cyberw from "../../../assets/expoimg/cyberwoman.png"
import { Alert } from "@mui/material";

const PacketSection = () => {
  const [alertSt2,setAlertSt2]=useState(false)

  function handleMore2(){
    setAlertSt2(true)
    setTimeout(() => {
      setAlertSt2(false)
    }, 10000);
  }
  return (
    <div className="packetMain_block">
      {
        alertSt2?<div className="alert2"><Alert severity="info">Для подробной информационнии позвоните или напишите в ватсап по номеру :+996 555 060 955</Alert></div>:null
      }
      <h2 className="packet_Main_text">НОМИНАЦИЯ CYBER WOMAN</h2>
      <div className="packetVariants">
        <div className="pack1block">
          <div className="pack1"><h2>СОВМЕСТНО С</h2> <img src={htp} alt="" className="packetImg2"/></div>
          <p className="packeInfo">Если вы или ваша коллега сделали значительный вклад в развитие IT, проявили лидерство, внедрили инновационные решения или вдохновили других, эта номинация для вас!</p>
          <p className="packetBtn packBtn1" onClick={()=>{handleMore2()}}>Подробнее</p>
        </div>
        <div className="pack2block ">
            <img src={cyberw} alt="" className="packetiMG packetImg3" />
        </div>
      </div>
    </div>
  );
};

export default PacketSection;
