// src/pages/Technology/index.tsx
import { useState } from 'react';
import data from '../../../data.json';
// Import all the images. Note the different types (portrait/landscape)
import launchVehicleLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import launchVehiclePortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceportLandscape from '../../assets/technology/image-spaceport-landscape.jpg';
import spaceportPortrait from '../../assets/technology/image-spaceport-portrait.jpg';
import spaceCapsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg';
import spaceCapsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg';

const techImages = [
  { landscape: launchVehicleLandscape, portrait: launchVehiclePortrait },
  { landscape: spaceportLandscape, portrait: spaceportPortrait },
  { landscape: spaceCapsuleLandscape, portrait: spaceCapsulePortrait },
];

function Technology() {
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const { technology } = data;
  const activeTech = technology[activeTechIndex];
  const activeImages = techImages[activeTechIndex];

  return (
    <main className="flex-grow pt-24 text-white md:pt-32 lg:pl-40 lg:pb-32">
      {/* Page Title */}
      <h1 className="w-full text-center font-sans-condensed mb-8 text-base uppercase tracking-[2.7px] md:text-left md:pl-10 md:text-xl lg:pl-0 lg:text-2xl">
        <span className="mr-4 font-bold opacity-25">03</span> Space launch 101
      </h1>

      {/* Main Content Area */}
      <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between">
        {/* Technology Image */}
        <div className="w-full lg:w-1/3">
          {/* Landscape image for smaller screens */}
          <img src={activeImages.landscape} alt={activeTech.name} className="w-full object-cover lg:hidden" />
          {/* Portrait image for desktop */}
          <img src={activeImages.portrait} alt={activeTech.name} className="hidden w-full object-cover lg:block" />
        </div>

        {/* Navigator and Text Content */}
        <div className="flex flex-col items-center px-6 mt-8 lg:flex-row lg:gap-20">
          {/* Numbered Navigator */}
          <nav className="flex gap-4 lg:flex-col">
            {technology.map((_tech, index) => (
              <button
                key={index}
                onClick={() => setActiveTechIndex(index)}
                className={`grid h-10 w-10 place-items-center rounded-full border border-white/25 font-serif text-base hover:border-white md:h-14 md:w-14 md:text-2xl lg:h-20 lg:w-20 lg:text-3xl
                  ${activeTechIndex === index ? 'bg-white text-black' : 'bg-transparent text-white'}`}
              >
                {index + 1}
              </button>
            ))}
          </nav>

          {/* Text */}
          <article className="mt-6 text-center lg:mt-0 lg:text-left">
            <h2 className="font-sans-condensed text-sm uppercase tracking-[2.36px] text-indigo-200 md:text-base">
              The Terminology...
            </h2>
            <h3 className="mt-2 font-serif text-2xl uppercase md:text-4xl lg:text-5xl">
              {activeTech.name}
            </h3>
            <p className="mt-4 max-w-md font-sans text-[15px] leading-6 text-indigo-200 md:leading-7 lg:text-lg lg:leading-8">
              {activeTech.description}
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}

export default Technology;