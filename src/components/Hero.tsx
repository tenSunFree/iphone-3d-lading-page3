import { useGSAP } from "@gsap/react";
import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";
import {
  content0Png,
  content1Png,
  content2Png,
  content3Png,
  content5Png,
  content6Png,
} from "../utils";

interface HeroProps {
  index: number;
  navbarHeight: number;
}

const Hero: React.FC<HeroProps> = ({ index, navbarHeight }) => {
  console.log("Hero, index: ", index);

  let content;

  switch (index) {
    case 0:
      content = (
        <img className="bg-[#FFFFFFFF]" src={content0Png} alt="content0Png" />
      );
      break;
    case 1:
      content = (
        <img className="bg-[#FFFFFFFF]" src={content1Png} alt="content1Png" />
      );
      break;
    case 2:
      content = (
        <img className="bg-[#FFFFFFFF]" src={content2Png} alt="content2Png" />
      );
      break;
    case 3:
      content = (
        <img className="bg-[#FFFFFFFF]" src={content3Png} alt="content3Png" />
      );
      break;
    case 4:
      content = <div />;
      break;
    case 5:
      content = (
        <img className="bg-[#FFFFFFFF]" src={content5Png} alt="content5Png" />
      );
      break;
    case 6:
      content = (
        <img className="bg-[#FFFFFFFF]" src={content6Png} alt="content6Png" />
      );
      break;
    default:
      content = <div />;
      break;
  }

  {
    /* 橘色 */
  }
  return (
    <div
      className={`fixed top-[${navbarHeight}px] left-0 w-full z-40 bg-[#FF800050] shadow-lg`}
    >
      {/* 紅色 */}
      {content}
    </div>
  );
};

export default Hero;
