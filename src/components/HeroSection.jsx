import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            <p className="bg-linear-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text">ImmersiVerse</p>
            <p>Build tool for developers</p>
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
  )
}

export default HeroSection