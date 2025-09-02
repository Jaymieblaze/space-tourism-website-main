import { useState } from 'react';
import data from '../../../data.json';
import douglasImg from '../../assets/crew/image-douglas-hurley.png';
import markImg from '../../assets/crew/image-mark-shuttleworth.png';
import victorImg from '../../assets/crew/image-victor-glover.png';
import anoushehImg from '../../assets/crew/image-anousheh-ansari.png';

const crewImages = [douglasImg, markImg, victorImg, anoushehImg];

function Crew() {
    const [activeCrewIndex, setActiveCrewIndex] = useState(0);
    const { crew } = data;
    const activeCrewMember = crew[activeCrewIndex];

    return (
        <main className="flex-grow flex flex-col mx-auto md:px-16 lg:max-w-[1100px] w-full">
            {/* Page Title */}
            <div className="align-self-start w-full">
                <h1 className="w-full pt-10 font-sans-condensed mb-8 text-base uppercase tracking-[2.7px] text-center text-white md:pt-16 md:text-left md:text-xl lg:text-2xl">
                    <span className="mr-4 font-bold opacity-25">02</span> Meet your crew
                </h1>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col px-6 md:px-0 items-center lg:grid lg:grid-cols-2 lg:gap-8 lg:pb-20">

                {/* Text and Dots Container */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:h-full lg:justify-between">
                    <article className="lg:pt-28">
                        <h2 className="font-serif text-base uppercase text-white/50 md:text-2xl lg:text-3xl">
                            {activeCrewMember.role}
                        </h2>
                        <h3 className="mt-2 font-serif text-2xl uppercase text-white md:text-4xl lg:text-5xl">
                            {activeCrewMember.name}
                        </h3>
                        <p className="mt-4 max-w-md font-sans text-[15px] leading-6 text-indigo-200 md:leading-7 lg:text-lg lg:leading-8">
                            {activeCrewMember.bio}
                        </p>
                    </article>

                    <nav className="flex gap-4 my-8 md:my-10">
                        {crew.map((_member, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCrewIndex(index)}
                                className={`h-2.5 w-2.5 rounded-full ${activeCrewIndex === index ? 'bg-white' : 'bg-white/20 hover:bg-white/50'}`}
                            />
                        ))}
                    </nav>
                </div>

                {/* Crew Image */}
                <div className="relative flex w-full mt-auto justify-center border-b border-gray-700 md:border-b-0 lg:self-end md:h-[530px] lg:h-[530px]">
                    <img src={crewImages[activeCrewIndex]} alt={activeCrewMember.name} className="h-full object-contain" />
                    <div className="absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-[#0B0D17] to-transparent"></div>
                </div>
            </div>
        </main>
    );
}

export default Crew;