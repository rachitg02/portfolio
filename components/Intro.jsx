import React from 'react'

export default function Intro(){
    return (
        <div className="flex items-center justify-center flex-col text-center text-white pt-16 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Rachit</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm am a full-stack developer building projects that intrests me. 
            I love collaborating with my fellow developers so do contact, we might just make the next big thing.
            <br />
            All coding projects are built from the ground up, from planning and designing 
            all the way to solving real-life problems with code.
            You can click on this{' '}
            <a
               href="/assets/Rachit Gupta Resume.pdf"
               className="text-red-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               download
            >
                link
            </a>{' '} and learn more about my qualification, experiances and projects.
         </p>
      </div>
    )
}