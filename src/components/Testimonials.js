import { TerminalIcon, UsersIcon } from '@heroicons/react/solid';
import React from 'react'
import { testimonials } from '../mock/data';
const Testimonials = () => {
    return (
        <section id='testimonials' className='min-h-screen pt-16'>
            <div className='container mx-auto px-6 py-10 text-center'>
                <UsersIcon className='w-10 inline-block mb-4' />
                <h1 className='text-3xl sm:text-4xl text-white font-medium mb-12'>Testimonials</h1>
                <div className='flex flex-wrap md:flex-nowrap  justify-center m-4'>
                    {testimonials.map((testimonial) => (
                        <div className='p-4 md:w-1/2 w-full' key={testimonial.image}>
                            <div className='h-full bg-gray-800 bg-opacity-40 p-8 rounded'>
                                <TerminalIcon className='w-8 inline-block text-gray-500 mb-4' />
                                <p className='leading-relaxed mb-6'>{testimonial.quote}</p>
                                <div className='inline-flex items-center'>
                                    <img alt='testimonial' src={testimonial.image} className="w-12 rounded-full flex-shrink-0 object-cover object-center"/>
                                   <span className='flex flex-col flex-grow pl-4'>
                                   <span className='font-medium text-white'>
                                        {testimonial.name}
                                    </span>
                                    <span className='text-gray-500 text-sm uppercase'>{testimonial.company}</span>
                                   </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Testimonials;