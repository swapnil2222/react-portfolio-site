import React from 'react'
const About = () => {
    return (
        <section id='about' className='min-h-screen'>
            <div className='container mx-auto h-full flex px-10 py-20 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    <h1 className='text-3xl mb-4 sm:text-4xl font-medium text-white'>Hi, I'm Swapnil Renge,
                        <br className='hidden lg:inline-block' />
                        I love to build amazing web apps
                    </h1>
                    <p className='mb-8 leading-relaxed'>
                     Software Engineer | Learner | Explorer | Avid reader 
                    </p>
                    <div className='flex justify-center'>
                        <a className='inline-flex text-white px-6 py-2 bg-green-500 border-0 focus:outline-none hover:bg-green-600 rounded text-lg' href='#contact'>Work With Me</a>
                        <a className='ml-4 inline-flex bg-gray-800 px-6 py-2 text-gray-400 border-0 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg' href='#projects'>See My Work</a>
                    </div>
                </div>
                <div className='w-5/6'>
                <img className='object-cover object-center rounded h-full' src='image.svg' />
                </div>
            </div>
        </section>
    )
}

export default About;