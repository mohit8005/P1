import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-4 text-center">
      <div className="uppercase text-[9.5vw] leading-[8vw]">The spark for</div>
      <div className="uppercase text-[9.5vw] leading-[8vw] flex items-center justify-center">
        all
        <div className="h-[7vw] w-[16vw]  rounded-full overflow-hidden -mt-5">
          <Video />
        </div>
        things
      </div>
      <div className="uppercase text-[9.5vw] leading-[8vw]">creative</div>
    </div>
  );
};

export default HomeHeroText;
