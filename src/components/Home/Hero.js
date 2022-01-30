import React from 'react';
import Animation from './logoAnimation';


const Hero=()=>{
    return(
        <div className='h-screen relative pb-20'>
                <video className='h-screen absolute w-screen object-cover z-10' autoPlay loop muted>
                    <source src="bgvideo.webm" type='video/mp4' />
                </video>
           <Animation />
        </div>
    )
}
export default Hero;