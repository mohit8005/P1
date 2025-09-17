import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import NavContext, { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null)
  const fullScreenRef = useRef(null)
  
  const [navOpen,setnavOpen] = useContext(NavbarContext)
   console.log(navOpen);

  
  
  useGSAP(function () {
    const tl = gsap.timeline(); 
     
   

    tl.from(".stairing", {
      height: 0,
      stagger: {amount: -0.25,},
    });

    tl.from(fullNavLinksRef.current,{
            opacity:0
    })

    tl.from('.link',{
      opacity:0,
      rotateX:90,
      stagger: {amount: 0.2,},
    })

    tl.pause()


    if(navOpen){
      fullScreenRef.current.style.display = 'block'
      tl.play()
    }else{
      fullScreenRef.current.style.display = 'none'
      tl.reverse()
    }
    
  },[navOpen])




  return (
    <div ref={fullScreenRef} id="fullscreennav" className=" h-screen text-white w-full absolute overflow-hidden z-50">
      
      <div className="h-screen w-full fixed">
         <div className="h-full w-full flex  ">
          <div className="stairing h-full w-1/5 bg-red-900"></div>
          <div className="stairing h-full w-1/5 bg-red-900"></div>
          <div className="stairing h-full w-1/5 bg-red-900"></div>
          <div className="stairing h-full w-1/5 bg-red-900"></div>
          <div className="stairing h-full w-1/5 bg-red-900"></div>
        </div>

      </div>


      <div ref={fullNavLinksRef} className="relative">
         <div className="flex w-full justify-between items-start p-3 ">
          <div className="">
        <div className=" w-30 ">
        <svg
        xmlns="http://www.w3.org/2000/svg"
       className="w-full"
        viewBox="0 0 103 44"
      >
        <path
          fillRule="evenodd"
          fill="white"
          d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
        />
      </svg>
      </div>
          </div>
          <div onClick={()=>{
            setnavOpen(false)
          }
          } className="h-28 w-28 relative  cursor-pointer">
            <div className=" h-40 w-0.5 absolute -rotate-45 origin-top bg-[#D3FD50]"></div>
            <div className=" h-40 w-0.5 absolute right-0 rotate-45 origin-top bg-[#D3FD50]"></div>
            
          </div>
      </div>

      <div  className="">
        <div className="link origin-top border-t-1 border-white relative ]">
          <h1 className="font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase text-white ">Work</h1>
          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex   items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">See everything</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"              
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">See everything</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>

            <div className="moveX flex   items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">See everything</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"              
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">See everything</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
           
          </div>
        </div>
        <div className="link origin-top border-t-1 border-white relative ]">
          <h1 className="font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase text-white ">Agency</h1>
          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex   items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">knows us</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"              
                src="https://k72.ca/uploads/teamMembers/PLP_640x280-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">knows us</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"
                src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg"
                alt=""
              />
            </div>

            <div className="moveX flex   items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">knows us</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"              
                src="https://k72.ca/uploads/teamMembers/PLP_640x280-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">knows us</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"
                src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg"
                alt=""
              />
            </div>
           
          </div>
        </div>
        <div className="link origin-top border-t-1 border-white relative ]">
          <h1 className="font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase text-white ">Contact </h1>
          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex   items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">send a fax</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"              
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">send a fax</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>

            <div className="moveX flex   items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">send a fax</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"              
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">send a fax</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
           
          </div>
        </div>
        <div className="link origin-top border-y-1 border-white relative ]">
          <h1 className="font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase text-white ">blog</h1>
          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex   items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">read article</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"              
                src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">read article</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"
                src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                alt=""
              />
            </div>

            <div className="moveX flex   items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">read article</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"              
                src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.7] pt-7 pb-1 text-center uppercase  ">read article</h2>
              <img
              className="h-[6vw]  mx-5 rounded-full object-cover w-[17vw] shrink-0"
                src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                alt=""
              />
            </div>
           
          </div>
        </div>
        
      </div>
      </div>

    </div>
  );
};

export default FullScreenNav;
