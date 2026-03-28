'use client';
import react from 'react';
import Image from 'next/image';

const ExploreOptions = [
  {
    id: 1,
    title: 'Quizz Pack',
    desc: 'Practice what you learned with bite-sized code challenges.',
    icon: '/tree.png'
  },
  {
    id: 2,
    title: 'Video Courses',
    desc: 'Learn with structured video lessons taught step-by-step.',
    icon: '/game.png'
  },
  {
    id: 3,
    title: 'Community Project',
    desc: 'Build real-world apps by collaborating with the community.',
    icon: '/growth.png'
  },
  {
    id: 4,
    title: 'Explore Apps',
    desc: 'Explore prebuild app which you can try demo and build it..',
    icon: '/start-up.png'
  }
];

function Explore() {    
    return (
        <div className='mt-6'>
          <h2 className='text-3xl font-game'>Explore More</h2>
          <div className='grid grid-cols-2 gap-5'>
            {ExploreOptions.map ((Option,index) =>(
                <div key={index} className='flex  gap-2 p-2 border rounded-2xl bg-zinc-900'>
                    <Image src={Option?.icon} alt={Option?.title}
                     width={80} height={80}
                     />
                     <div>
                      <h2 className='font-medium text-2xl font-game'>{Option?.title}</h2>
                      <p className='text-gray-400 font-game'>{Option?.desc}</p>

                     </div>
                </div>
              ) )}
        </div>
        </div>
    )
}
export default Explore;