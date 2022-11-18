import React from 'react';
import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/d3b21e60-a60a-4552-bb88-038405155adf"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="p-2 bg-transparent border-2 border-gray-500 focus:border-red-400 rounded-md focus:outline-none"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                  className="my-2 p-2 border-gray-500 focus:border-red-400 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  required
                  className="p-2 border-gray-500 focus:border-red-400 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <button
                  type="submit"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-red-600 to-blue-600 drop-shadow-md"
               >
                  Work With Me
               </button>
            </form>
         </div>
      </div>
   )
}

export default Contact;