import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</h1>
                </div>
                
                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quia ipsam dicta, consequatur explicabo quo ad quas deserunt libero repellendus? Cupiditate temporibus mollitia reprehenderit rerum, dolor animi? Dolorem dicta laudantium soluta et ducimus aut officia facere explicabo eius blanditiis voluptatem corrupti, vel perferendis dolorum totam ullam natus ipsa! Praesentium, qui.
                </p>

                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laboriosam nemo dolor dolores magnam. Corrupti ullam a exercitationem, eveniet quae totam nobis dolores dolor. Fugiat, facilis minima nostrum quo, amet culpa expedita quidem esse pariatur earum eveniet debitis dicta iure, cupiditate beatae fuga. Voluptate voluptatibus totam voluptas quis odit nam.
                </p>
            </div>
        </div>
    )
}

export default About