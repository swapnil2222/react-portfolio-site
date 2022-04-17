import React from 'react'
const Contact = () => {
    return (
        <section id='contact' className='pt-10 min-h-screen'>
            <div className='container mx-auto px-5 py-10 flex sm:flex-nowrap flex-wrap'>
                <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56949.40653084236!2d73.81521036713414!3d18.498468052865874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649571338884!5m2!1sen!2sin"
                    />
                    <div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
                        <div className='lg:w-1/2 px-6'>
                            <h2 className='font-semibold text-white tracking-widest text-xs uppercase'> Addreess</h2>
                            <p className="mt-1">
                                Karve Nagar <br />
                                Pune, Maharashtra, India. 411055
                            </p>
                        </div>
                        <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                            <h2 className='uppercase font-semibold text-white tracking-widest text-xs'>Email</h2>
                            <a className='text-indigo-400 leading-relaxed'>
                                swaprenge2222@gmail.com
                            </a>
                            <h2 className="font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">+91 7972305264</p>
                        </div>
                    </div>
                </div>
                <form className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
                    <h2 className='text-white font-medium sm:text-4xl text-3xl mb-1'>Hire Me</h2>
                    <p className='leading-relaxed mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                        suscipit officia aspernatur veritatis. Asperiores, aliquid?</p>
                    <div className='relative mb-4'>
                        <label htmlFor='name' className='leading-7 text-sm text-gray-400'>Name</label>
                        <input type="text" id='name' name='name' className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900
                            text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor='email' className='leading-7 text-sm text-gray-400'>Email</label>
                        <input type="email" id='email' name='email' className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-8 transition-colors duration-200 ease-in-out'/>
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button type='submit' className='text-white bg-indigo-500 border-0 py-2 px-6 rounded focus:outline-none hover:bg-indigo-600 text-lg'>Submit</button>
                </form>
            </div>
        </section>
    )
}
export default Contact;