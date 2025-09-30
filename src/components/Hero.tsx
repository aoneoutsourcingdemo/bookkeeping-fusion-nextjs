import { Button } from "@/components/ui/button";
import leftVideo from "@/assets/checkfinal.mp4";

const Hero = () => {
  return (
    <section className="relative bg-white h-screen flex items-center overflow-hidden font-poppins">
      <div className="absolute top-[-134PX] left-0 w-full h-[149%] -translate-y-10 z-0">
        <video
          src={leftVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Future forward <br className="hidden md:block" />
          <span className="text-pink-600">bookkeeping</span>
        </h1>
       {/* <p className="text-lg md:text-2xl text-gray-600 mb-8">
         Providing Timely, Consistent, and Professional Bookkeeping Services to help Build your Business
        </p>*/}
        <Button
          size="lg"
          className="text-lg px-10 py-6 bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-xl"
        >
          START
        </Button>
      </div>
    </section>
  );
};

export default Hero;
