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
        <main className="flex-grow flex flex-col px-6 pt-24 text-center text-white md:pt-32 lg:px-40 lg:text-left">
            {/* Page Title */}
            <h1 className="w-full font-sans-condensed mb-8 text-base uppercase tracking-[2.7px] md:text-left md:text-xl lg:text-2xl">
                <span className="mr-4 font-bold opacity-25">02</span> Meet your crew
            </h1>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col items-center lg:flex-row-reverse lg:justify-between">
                {/* Text Content */}
                <article className="lg:pt-28">
                    <h2 className="font-serif text-base uppercase text-white/50 md:text-2xl lg:text-3xl">
                        {activeCrewMember.role}
                    </h2>
                    <h3 className="mt-2 font-serif text-2xl uppercase md:text-4xl lg:text-5xl">
                        {activeCrewMember.name}
                    </h3>
                    <p className="mt-4 max-w-md font-sans text-[15px] leading-6 text-indigo-200 md:leading-7 lg:text-lg lg:leading-8">
                        {activeCrewMember.bio}
                    </p>
                </article>

                {/* Dot Navigator */}
                <nav className="flex gap-4 my-8 md:my-10 lg:absolute lg:bottom-16">
                    {crew.map((_member, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCrewIndex(index)}
                            className={`h-2.5 w-2.5 rounded-full ${activeCrewIndex === index ? 'bg-white' : 'bg-white/20 hover:bg-white/50'}`}
                        />
                    ))}
                </nav>

                {/* Crew Image */}
                <div className="flex w-full mt-auto justify-center border-b border-gray-700 px-6 md:border-b-0 lg:self-end">
                    <img src={crewImages[activeCrewIndex]} alt={activeCrewMember.name} className="h-56 md:h-[530px] lg:h-auto" />
                </div>
            </div>
        </main>
    );
}

export default Crew;