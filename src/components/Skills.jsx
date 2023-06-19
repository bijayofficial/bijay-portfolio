import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/jsvascript.png';
import REACT from '../assets/react.png';
import Node from '../assets/nodejs.png';
import Mongo from '../assets/mongo.png';
import SQL from '../assets/mySQL.png';
import Github from '../assets/github.png';
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300 px-8 '>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'> Experience</p>
          <p className='py-4'> These  are the technologies I have worked with.</p>
        </div>

        <div className='w-full  grid grid-cols-2 sm:grid-cols-4 text-center '>
          <div className='shadow-md shadow-[#040c16] hover:scale-110  py-3 hover:bg-[#0c0423] duration-500' >
            <img className='w-20 mx-auto' src={HTML} alt="html" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110  py-3 hover:bg-[#0c0423] duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="css" />
            <p className='my-4'>CSS</p>

          </div>
        
          <div className='shadow-md shadow-[#040c16] hover:scale-110  py-3 hover:bg-[#0c0423] duration-500'>
            <img className='w-20 mx-auto' src={JS} alt="javascript" />
            <p className='my-4'>JAVASCRIPT</p>

          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 py-3 hover:bg-[#0c0423] duration-500'>
            <img className='w-20 mx-auto' src={REACT} alt="react" />
            <p className='my-4'>REACT JS</p>

          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110  py-3 hover:bg-[#0c0423] duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="nodejs" />
            <p className='my-4'>NODE JS</p>

          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110  py-3 hover:bg-[#0c0423] duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="mongodb" />
            <p className='my-4'>MongoDB</p>

          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110  py-3 hover:bg-[#0c0423] duration-500'>
            <img className='w-20 mx-auto' src={SQL} alt="mysql" />
            <p className='my-4'>MySQL</p>

          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110  py-3 hover:bg-[#0c0423] duration-500'>
            <img className='w-20 mx-auto' src={Github} alt="github" />
            <p className='my-4'>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
