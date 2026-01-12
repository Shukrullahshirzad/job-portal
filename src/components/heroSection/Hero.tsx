import heroImage from "../../images/find_job.png";
const Hero = () => {
  return (
    <div className="flex items-center  px-20 ">
      <div className="w-[45%] flex flex-col gap-6">
        <div className="text-5xl font-bold mb-4 text-mine-shaft-100">
          <h1 className=" [&>span]:text-bright-sun-300">
            Find Your <span>Dream</span>
            <span> Job</span>
          </h1>
        </div>
        <div className="text-mine-shaft-100 text-lg leading-7">
          <p>
            Good life is about more than just a paycheck. It's about finding a
            career that aligns with your passions, values, and lifestyle.
          </p>
        </div>

        <div></div>
      </div>
      <div className="w-[55%]  overflow-hidden justify-center items-center flex">
        <div className="w-120">
          <img className="rounded-2xl" src={heroImage} alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
