import { useEffect, useRef } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      const anime = window.anime;
      const targets = titleRef.current.querySelectorAll(".animating-char");
      const pathLength = 1000; 

      targets.forEach(t => {
        t.style.strokeDasharray = pathLength;
        t.style.strokeDashoffset = pathLength;
        t.style.opacity = "1";
      });

      anime({
        targets: targets,
        strokeDashoffset: [
          // 1. Draw In + Wait (endDelay handles the pause)
          { 
            value: 0, 
            duration: 1000, 
            easing: 'easeInOutQuart',
            endDelay: 400 
          },       
          // 2. Erase Out
          { 
            value: -pathLength, 
            duration: 1000, 
            easing: 'easeInOutQuart'
          } 
        ],
        delay: anime.stagger(80), 
        loop: true,
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const text = "ImmersiVerse";
  const letters = text.split("").map((char, index) => (
    <tspan key={index} className="animating-char">{char}</tspan>
  ));

  return (
    <div className="flex flex-col items-center lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide flex flex-col items-center">
        <div ref={titleRef} className="w-full h-24 sm:h-32 flex justify-center items-center">
          <svg className="w-full h-full max-w-4xl" viewBox="0 0 600 100">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#67e8f9" /> 
                <stop offset="100%" stopColor="#60a5fa" /> 
              </linearGradient>
            </defs>
            
            <text
              x="50%"
              y="80%"
              textAnchor="middle"
              fill="transparent"
              stroke="url(#gradient)"
              strokeWidth="1.5"
              className="font-medium tracking-wide"
              style={{ fontSize: "70px", opacity: 0.15 }} 
            >
              ImmersiVerse
            </text>

            <text
              x="50%"
              y="80%"
              textAnchor="middle"
              fill="transparent"
              stroke="url(#gradient)"
              strokeWidth="1.5"
              className="font-medium tracking-wide"
              style={{ fontSize: "70px" }}
            >
              {letters}
            </text>
          </svg>
        </div>
        <p className="mt-2">Build tool for developers</p>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
        Unleash your creativity and transform your VR app ideas into reality with our intuitive development tools. 
        Start today and bring your imagination to life in truly immersive experiences.
      </p>
      <div className="flex justify-center my-10">
        <a href="" className="bg-linear-to-r from-cyan-300 to-blue-400 py-3 px-4 mx-3 rounded-md ">
          <p className="text-black font-medium">Start for free</p>
        </a>
        <a href="" className="py-3 px-4 mx-3 rounded-md border">
          Documentation 
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-cyan-400 shadow-cyan-600 mx-2 my-4">
          <source src={video1} type="video/mp4"/>
          Your browser does not support the video
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-cyan-400 shadow-cyan-600 mx-2 my-4">
          <source src={video2} type="video/mp4"/>
          Your browser does not support the video
        </video>
      </div>
    </div>
  );
};

export default HeroSection;