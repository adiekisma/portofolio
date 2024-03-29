import React from 'react';
import react1 from '../assets/portfolio/stay.png';
import react2 from '../assets/portfolio/mokha.png';
import react3 from '../assets/portfolio/pressnaturally.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: react1
        },
        {
            id: 2,
            src: react2
        },
        {
            id: 3,
            src: react3
        },
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-700'>Portofolio</p>
                    <p className='py-6'>Check out my work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {
                    portfolios.map(({id, src }) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-150'/>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Portfolio