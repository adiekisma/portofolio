import React from 'react';
import hero from '../assets/heroimage.JPEG';
import{ MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold'>Hello I'm FullStack Developer</h2>
                <p className='text-gray-300 py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio veritatis atque molestias quas accusantium. Assumenda temporibus illo molestias nostrum ipsam quod architecto unde ab, cum ratione similique eius adipisci!
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-green-600 to-blue-400 cursor-pointer'>
                        Portofolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={hero} alt='my profile' className='rounded-2xl mx-auto w-2/3' />
            </div>
        </div>
    </div>
  )
}

export default Home