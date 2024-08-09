import "./PacketSection.css";
import htp from "../../../assets/sponsorslogo/htp.svg";
import cyberw from "../../../assets/expoimg/cyberwoman.png";

const PacketSection = () => {
  return (
    <div className="packetMain_block">
      <h2 className="packet_Main_text">НОМИНАЦИЯ CYBER WOMAN</h2>
      <div className="packetVariants">
        <div className="pack1block">
          <div className="pack1">
            <h2>СОВМЕСТНО С</h2>{" "}
            <img loading="lazy" src={htp} alt="" className="packetImg2" />
          </div>
          <p className="packeInfo">
            Если вы или ваша коллега сделали значительный вклад в развитие IT,
            проявили лидерство, внедрили инновационные решения или вдохновили
            других, эта номинация для вас!
          </p>
          <a
            className="packetBtn packBtn1"
            href="https://wa.me/996555060955"
            target="_blank"
          >
            Подробнее
          </a>
        </div>
        <div className="pack2block ">
          <img
            loading="lazy"
            src={cyberw}
            alt=""
            className="packetiMG packetImg3"
          />
        </div>
      </div>
    </div>
  );
};

export default PacketSection;
