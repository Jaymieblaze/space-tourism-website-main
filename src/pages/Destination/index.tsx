import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import data from '../../../data.json';
import moonImg from '../../assets/destination/image-moon.png';
import marsImg from '../../assets/destination/image-mars.png';
import europaImg from '../../assets/destination/image-europa.png';
import titanImg from '../../assets/destination/image-titan.png';

const destinationImages = [moonImg, marsImg, europaImg, titanImg];

function Destination() {
  const [activeTab, setActiveTab] = useState(0);
  const { destinations } = data;
  const activeDestination = destinations[activeTab];

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // Go to the next destination, looping back to the start if at the end
      setActiveTab((prevTab) => (prevTab + 1) % destinations.length);
    },
    onSwipedRight: () => {
      // Go to the previous destination, looping to the end if at the start
      setActiveTab((prevTab) => (prevTab - 1 + destinations.length) % destinations.length);
    },
    preventScrollOnSwipe: true, 
    trackMouse: true // Allows swiping with a mouse for desktop testing
  });


  return (
    <main {...handlers} className="px-6 pt-24 text-center text-white lg:px-40 lg:pt-32 lg:pb-32 lg:text-left">
      {/* Page Title */}
      <h1 className="font-sans-condensed mb-8 text-base uppercase tracking-[2.7px] md:text-left md:text-xl lg:text-2xl">
        <span className="mr-4 font-bold opacity-25">01</span> Pick your destination
      </h1>

      <div className="grid lg:grid-cols-2 lg:gap-32">
        {/* Planet Image */}
        <div className="flex justify-center py-8 lg:py-0">
          <img src={destinationImages[activeTab]} alt={activeDestination.name} className="w-[170px] md:w-[300px] lg:w-full lg:max-w-[445px] aspect-square" />
        </div>

        {/* Tabs and Content */}
        <div>
          {/* Tab Navigation */}
          <nav className="flex justify-center gap-7 font-sans-condensed text-sm uppercase tracking-[2.36px] text-indigo-200 md:text-base lg:justify-start">
            {destinations.map((dest, index) => (
              <button
                key={dest.name}
                onClick={() => setActiveTab(index)}
                className={`border-b-2 pb-2 ${activeTab === index ? 'border-white text-white' : 'border-transparent hover:border-white/50'}`}
              >
                {dest.name}
              </button>
            ))}
          </nav>

          {/* Destination Info */}
          <article className="mt-5">
            <h2 className="font-serif text-6xl uppercase md:text-[80px] lg:text-[100px]">{activeDestination.name}</h2>
            <p className="mt-1 font-sans text-[15px] leading-6 text-indigo-200 md:leading-7 lg:text-lg lg:leading-8">
              {activeDestination.description}
            </p>
            <hr className="my-8 border-gray-600 md:mt-12 md:mb-7" />
            <div className="flex flex-col gap-8 md:flex-row md:justify-center md:gap-20 lg:justify-start">
              <div>
                <p className="font-sans-condensed text-sm uppercase tracking-[2.36px] text-indigo-200">Avg. Distance</p>
                <h3 className="font-serif text-3xl uppercase">{activeDestination.distance}</h3>
              </div>
              <div>
                <p className="font-sans-condensed text-sm uppercase tracking-[2.36px] text-indigo-200">Est. Travel Time</p>
                <h3 className="font-serif text-3xl uppercase">{activeDestination.travel}</h3>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default Destination;