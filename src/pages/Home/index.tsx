import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="flex-grow grid items-center px-6 text-center sm:justify-center md:justify-center lg:px-0 lg:items-end lg:grid-cols-2 lg:text-left lg:pb-20 lg:pt-10 lg:max-w-[1100px] lg:justify-between w-full mx-auto">
      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-start">
        <h5 className="font-sans-condensed text-base uppercase tracking-[2.7px] text-indigo-200 md:text-xl lg:text-2xl">
          So, you want to travel to
        </h5>
        <h1 className="font-serif text-[80px] uppercase text-white md:text-[144px]">
          Space
        </h1>
        <p className="w-full  font-sans text-[15px] leading-6 text-indigo-200 md:text-base md:leading-7  lg:leading-8">
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
        </p>
      </div>

      {/* Explore Button */}
      <div className="flex justify-center lg:justify-end items-center md:pt-0 lg:pt-0 z-0">
        <div className="explore-button-container aspect-square">
          <Link
            to="/destination"
            className="grid place-content-center h-[150px] w-[150px] rounded-full bg-white text-black font-serif text-xl uppercase md:h-[242px] md:w-[242px] md:text-[32px]"
          >
            Explore
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;