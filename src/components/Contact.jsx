import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen mx-auto flex flex-col justify-center items-center bg-[#0a192f] P-4'>
            <p className='text-4xl font-bold block border-b-4 border-pink-600 text-gray-300'>
                Contact
            </p>
            <form method='POST' action="https://getform.io/f/4a97a99c-be3c-4bbc-9037-f7e003597828" className='flex flex-col max-w-[600px]  sm:w-full w-[80%]'>

                <div className='pb-8'>

                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - bijayghoshofficial@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2 ' name="message" rows="10" placeholder='message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center ' > let's Colaborate</button>

            </form>
        </div>
    )
}

export default Contact
