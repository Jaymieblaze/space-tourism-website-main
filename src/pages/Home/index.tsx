// src/pages/Home/index.tsx

function Home() {
  return (
    <main className="flex-grow grid items-end px-6 lg:px-0 text-center lg:grid-cols-2 lg:text-left lg:pb-20 lg:pt-10 lg:max-w-[1100px] w-full mx-auto">
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
      <div className="flex justify-center lg:justify-end items-center pt-12 lg:pt-0">
        <div className="explore-button-container aspect-square">
          <a
            href="/destination"
            className="grid place-content-center h-[150px] w-[150px] rounded-full bg-white text-dark-blue font-serif text-xl uppercase md:h-[242px] md:w-[242px] md:text-[32px]"
          >
            Explore
          </a>
        </div>
      </div>
    </main>
  );
}

export default Home;