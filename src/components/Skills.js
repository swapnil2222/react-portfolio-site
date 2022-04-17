import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import React from 'react'
import { skills } from '../mock/data';
const Skills = () => {
    return (
        <section id='skills' className='bg-gray-900 min-h-screen pt-16'>
            <div className='container mx-auto px-5 py-10'>
                <div className='text-center mb-20'>
                    <ChipIcon className='w-10 mx-auto mb-4' />
                    <h1 className='text-3xl sm:text-4xl font-medium text-white mb-4'>Skills &amp; Technologies</h1>
                    <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>Experience in modern front-end frameworks like</p>
                </div>
                <div className='flex flex-wrap sm:mx-auto sm:mb-2 -mx-2'>
                {skills.map((skill)=>(
                    <div key={skill.image} className="p-2 w-full sm:w-1/2">
                        <div className='bg-gray-800 rounded flex p-4 h-full'>
                            <BadgeCheckIcon className='w-6 h-6 mr-4 flex-shrink-0 text-green-700' />
                            <img className='w-8 h-8 mr-4' src={skill.icon} alt={skill.name}/>
                            <span className='font-medium text-white'>{skill.name}</span>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}
export default Skills;