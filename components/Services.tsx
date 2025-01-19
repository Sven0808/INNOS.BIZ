import GridGlobe from "../components/ui/GridGlobe";
import { SparklesCore } from "../components/ui/Sparkles";

const Services = () => {
    return(
        <div className="justify-content-center w-full h-screen relative align-middle" id="about">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-screen absolute"
          particleColor="#FFFFFF"
        />
        <div className="absolute z-20 max-w-2xl top-10">
          <p><span className="text-2xl text-transparent bg-gradient-to-r from-blue-500 to-red-100 bg-clip-text top-20">Our Services</span></p>
          <h1 className="text-5xl py-5 text-neuxral-200">Where the world builds <span className="italic">software</span></h1>
          <p className="text-xl max-w-2xl text-neutral-400 pb-5">From custom software development to seamless integrations, we are your trusted partner in transforming ideas into impactful, scalable solutions. Let us guide you through the digital transformation journey with innovative, tailor-made services.</p>
          <button className="w-72 border-2 border-indigo-600 shadow shadow-cyan-500/50 text-start py-1 rounded"><span></span>Simplify your security</button><br></br>
          <button className="w-72 border-2 border-indigo-600 shadow shadow-cyan-500/50 my-3 py-1 text-start rounded">Customer identify</button><br />
          <button className="w-72 border-2 border-indigo-600 shadow shadow-cyan-500/50 text-start py-1 rounded">Adaptable authentication</button>
        </div>
        <div className="absolute bottom-10 right-0 max-w-2xl">
          <h1 className="text-5xl py-5 text-neuxral-200">Where the world builds <span className="italic">software</span></h1>
          <p className="text-xl max-w-2xl text-neutral-400 pb-5">From custom software development to seamless integrations, we are your trusted partner in transforming ideas into impactful, scalable solutions. Let us guide you through the digital transformation journey with innovative, tailor-made services.</p></div>
        <div className="absolute top-10 right-0 max-w-2xl">
          <h1 className="text-5xl py-5 text-neuxral-200">Where the world builds <span className="italic">software</span></h1>
          <p className="text-xl max-w-2xl text-neutral-400 pb-5">From custom software development to seamless integrations, we are your trusted partner in transforming ideas into impactful, scalable solutions. Let us guide you through the digital transformation journey with innovative, tailor-made services.</p></div>
        <div className="absolute bottom-10 max-w-2xl bottom-0 left-0">
          <h1 className="text-5xl py-5 text-neuxral-200">Where the world builds <span className="italic">software</span></h1>
          <p className="text-xl max-w-2xl text-neutral-400 pb-5">From custom software development to seamless integrations, we are your trusted partner in transforming ideas into impactful, scalable solutions. Let us guide you through the digital transformation journey with innovative, tailor-made services.</p></div>

        <div className="z-40 pt-72 left-20">
          <GridGlobe />
        </div>
      </div>
    );
};

export default Services;