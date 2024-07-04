import React from "react";
// import './styles/global.css'; // Import your global CSS file
import trakmama from "../assets/trakmama.png";

const AboutTrakmama = () => {
  return (
    <div className="flex items-center w-4/5 mx-auto gap: 5 my-10">
      <img src={trakmama} alt="" />
      <div>
        <h2 style={{ textAlign: "center" }} className="text-3xl font-bold">
          About Trakmama
        </h2>
        <p className="example-text" style={{ textAlign: "left" }}>
          TrakMama is a web platform for expectant mothers and new parents to
          track maternal and child health indicators, receive personalized
          guidance, and  keep track of scheduled appointments. This app also
          helps conceiving mothers stay healthy from start to childbirth.
          Providing daily to- reads, healthy tips and motivations at offline
          use. Help to connect pregnant women to share experiences. Enlighten
          potential mothers about healthy pregnancy, proneness to some
          conditions such as preeclampsia, diabetes, postpartum and
          hypertension.
        </p>
        <br />
      </div>
    </div>
  );
};

export default AboutTrakmama;
