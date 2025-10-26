import React, { useRef } from 'react'
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef=useRef(null);
    const project1Ref=useRef(null);
    const project2Ref=useRef(null);
    const project3Ref=useRef(null);
    
    
    useGSAP(()=>{
        const projects=[project1Ref.current,project2Ref.current,project3Ref.current];
        projects.forEach((card, index)=>{
        gsap.fromTo(
            card,
            {
                y:50,opacity:0
            },
            {
                y:0,
                opacity:1,
                duration:1,
                delay:0.3 *(index+1),//stagerring for first card =0.3 delay then increase 1+1=2 0.5
                scrollTrigger:{
                    trigger:card,
                    start:'top bottom-=100'
                }
            }
        )
    })
        gsap.fromTo(
            sectionRef.current,
            {opacity:0},
            {opacity:1,duration:1.5}
        )


    },[]);
  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
               {/*LEFT */} 
               <div className='first-project-wrapper' ref={project1Ref}>
                <div className='image-wrapper'>
                    <img src='/images/KitchenChaos.png' alt='Kitchen Chaos'/>
                </div>
                <div className='text-content'>
                    <h2>Created Kitchen Chaos, a fast-paced Unity game challenging players to cook and serve dishes within a time limit.</h2>
                    <p className='text-white-50 md:text-xl'>
                       Kitchen Chaos – A time-based cooking game built with Unity using C#, OOP principles, enums, and the event system to manage cooking, cutting, and order delivery mechanics. The project was a challenging experience that strengthened my understanding of software development, game architecture, script communication, and real-time gameplay logic. 
                    </p>
                </div>
               </div>
                {/*RIGHT */} 
                <div className='project-list-wrapper overflow-hidden flex flex-col gap-20'>
                    <div className='project' ref={project2Ref}>
                      <div className='image-wrapper bg-[#ffeFdb]'>
                        <img src='/images/ThinkBoard.png' alt="Think Board"/>
                        <div>
                            <h2>Streamline your thoughts with a fast, intuitive note app</h2>
                        </div>

                        </div> 
                 
                    </div>
                      <div className='project' ref={project3Ref}>
                      <div className='image-wrapper bg-[#ffe7eb]'>
                        <img src='/images/VoidRecoil.jpg' alt="Void Recoil"/>
                        <div>
                            <h2>A first-person shooter that tests your reflexes, precision, and survival instincts.</h2>
                        </div>

                        </div>  
                    </div>

                </div>

            </div>

        </div>

        </section>
  )
}

export default ShowcaseSection