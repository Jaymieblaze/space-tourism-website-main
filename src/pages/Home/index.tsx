// src/pages/Home/index.tsx

function Home() {
  return (
    <main className="flex-grow grid items-end px-6 pb-12 text-center lg:grid-cols-2 lg:text-left lg:pb-32 lg:max-w-[1100px] w-full mx-auto">
      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-start">
        <h5 className="font-sans-condensed text-base uppercase tracking-[2.7px] text-indigo-200 md:text-xl lg:text-2xl">
          So, you want to travel to
        </h5>
        <h1 className="font-serif text-[80px] uppercase text-white md:text-[150px]">
          Space
        </h1>
        <p className="max-w-md font-sans text-[15px] leading-6 text-indigo-200 md:text-base md:leading-7 lg:text-lg lg:leading-8">
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
        </p>
      </div>

      {/* Explore Button */}
      <div className="flex justify-center items-center pt-12 lg:pt-0">
        <a href="#" className="grid h-36 w-36 place-items-center rounded-full bg-white font-serif text-xl uppercase tracking-[1.25px] text-black md:h-60 md:w-60 md:text-3xl">
          Explore
        </a>
      </div>
    </main>
  );
}

export default Home;