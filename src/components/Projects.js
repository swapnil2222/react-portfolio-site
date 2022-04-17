import React from 'react'
import { projects } from '../mock/data';
import {CodeIcon} from '@heroicons/react/solid'
const Projects = () => {
    return (
        <section id='projects' className='bg-gray-900 text-gray-400 min-h-screen pt-16'>
            <div className='container mx-auto px-5 py-10 text-center lg:px-40'>
                <div className='flex flex-col w-full mb-8'>
                    <CodeIcon className='mx-auto w-10 mb-4 inline-block' />
                    <h1 className='text-white text-3xl mb-4 font-medium sm:text-4xl'> Projects  </h1>
                    <p className='leading-relaxed lg:w-2/3 mx-auto text-base'> 
                        Worked on various projects including personal and professional web applications ranging from Education, GIS and Finance domain.
                    </p>
                </div>
                <div className='flex flex-wrap -m-4 relative'>
                    {projects.map((project) => (
                        <a href={project.link} key={project.image} className="p-4 sm:w-1/2 w-full">
                            <div className='flex relative'>
                                <img className='absolute inset-0 w-full h-full object-cover object-center' src={project.image} alt="gallery" />
                                <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
                                    <h2 className='tracking-widest text-sm font-medium text-green-400 mb-1'>{project.subtitle}</h2>
                                    <h1 className='text-lg font-medium text-white mb-3'>{project.title}</h1>
                                    <p className='leading-relaxed'>{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects;