import React from 'react'
import weather from '../assets/weatherApp.jpg'
import googleClone from '../assets/googleClone.png'
const Work = () => {
    return (
        <div name='work' className=' w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            {/* container  */}
            <div className='max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6 '>Check out some of my recent works</p>
                </div>
                {/* container  */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* grid  item  */}
                    <div style={{ backgroundImage: `url(${googleClone})` }} className='shadow-lg shadow-[#040c16] group  container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Google Clone
                            </span>


                            <div className='pt-8 text-center '>
                                <a href="/"></a>
                                <button className='text-center rounded-lg bg-white text-blue-800 font-bold text-lg px-4 py-3 m-2'>Demo</button>
                                <a href="/"></a>
                                <button className='text-center rounded-lg bg-white text-blue-800 font-bold text-lg px-4 py-3 m-2'>Code</button>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${weather})` }} className='shadow-lg shadow-[#040c16] group  container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Weather  Application
                            </span>


                            <div className='pt-8 text-center '>
                                <a href="/"></a>
                                <button className='text-center rounded-lg bg-white text-blue-800 font-bold text-lg px-4 py-3 m-2'>Demo</button>
                                <a href="/"></a>
                                <button className='text-center rounded-lg bg-white text-blue-800 font-bold text-lg px-4 py-3 m-2'>Code</button>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${googleClone})` }} className='shadow-lg shadow-[#040c16] group  container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Google Clone
                            </span>


                            <div className='pt-8 text-center '>
                                <a href="/"></a>
                                <button className='text-center rounded-lg bg-white text-blue-800 font-bold text-lg px-4 py-3 m-2'>Demo</button>
                                <a href="/"></a>
                                <button className='text-center rounded-lg bg-white text-blue-800 font-bold text-lg px-4 py-3 m-2'>Code</button>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${weather})` }} className='shadow-lg shadow-[#040c16] group  container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Weather  Application
                            </span>


                            <div className='pt-8 text-center '>
                                <a href="/"></a>
                                <button className='text-center rounded-lg bg-white text-blue-800 font-bold text-lg px-4 py-3 m-2'>Demo</button>
                                <a href="/"></a>
                                <button className='text-center rounded-lg bg-white text-blue-800 font-bold text-lg px-4 py-3 m-2'>Code</button>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${googleClone})` }} className='shadow-lg shadow-[#040c16] group  container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Google Clone
                            </span>


                            <div className='pt-8 text-center '>
                                <a href="/"></a>
                                <button className='text-center rounded-lg bg-white text-blue-800 font-bold text-lg px-4 py-3 m-2'>Demo</button>
                                <a href="/"></a>
                                <button className='text-center rounded-lg bg-white text-blue-800 font-bold text-lg px-4 py-3 m-2'>Code</button>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${weather})` }} className='shadow-lg shadow-[#040c16] group  container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Weather  Application
                            </span>


                            <div className='pt-8 text-center '>
                                <a href="/"></a>
                                <button className='text-center rounded-lg bg-white text-blue-800 font-bold text-lg px-4 py-3 m-2'>Demo</button>
                                <a href="/"></a>
                                <button className='text-center rounded-lg bg-white text-blue-800 font-bold text-lg px-4 py-3 m-2'>Code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
