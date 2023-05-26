import brams from "../assets/images/BramsLF.png";
import profile from "../assets/images/profile.svg";
const Home = () => {
  return (
    <section className="lg:flex-row flex flex-col h-height-navbar lg:mt-24 mt-16">
      
      <div className="lg:w-1/2 lg:order-1 flex flex-col mx-10 order-2">
        <div className="lg:mt-10 lg:mb-8 mt-6 mb-4">
          <h1 className="lg:text-6xl lg:text-left text-center font-raleway font-black text-4xl text-myPalet-1000">
            I'm Brayan Mercado
          </h1>
        </div>
        <div className="lg:text-left text-center my-4 p-4 rounded-sm bg-myPalet-1000">
          <span className="font-raleway font-bold text-2xl text-myPalet-50">
            Web Developer
          </span>
        </div>
        <div className=" text-justify border-b-2">
          <p className="font-lato lg:text-lg text-myPalet-900">
            I am a passionate and self-taught technology student in software
            development, with a specialized focus on web development. Throughout
            my career, I have gained solid knowledge in web programming
            languages, frameworks, front-end and back-end technologies, as well
            as database design. I am seeking opportunities to apply and expand
            my skills in a challenging and collaborative work environment.
          </p>
        </div>
        <div className="hidden lg:flex justify-center">
          <button className="border my-6 p-4 w-1/2 cursor-pointer hover:bg-myPalet-500 hover:text-myPalet-50 font-raleway font-bold text-myPalet-900">
          ABOUT ME
        </button>
        </div>   
      </div>

      <div className="relative lg:w-1/2 flex justify-center items-center order-1 lg:order-2 mx-10 lg:mx-0">
        <img className="rotate-12 lg:w-4/5 w-3/4" src={profile} alt="forma" />
        <img className="absolute inset-0 lg:w-4/5 w-3/4 m-auto" src={brams} alt="BramsLF" />
      </div>

    </section>
  );
};

export default Home;
