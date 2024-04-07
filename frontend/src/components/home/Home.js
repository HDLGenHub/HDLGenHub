import React from 'react'
import homeimage from '../../images/Ico.jpg'
import notes from '../../images/notes.png'
import settings from '../../images/settings.png'
import world from '../../images/world.png'
import work from '../../images/work.png'

import './Home.css';
function Home() {
    return (
      <div className="flex flex-col mt-10">
        <div class="flex pb-0 p-5">
          <div className="w-1/2 text-left md:ml-10 mt-3 ">
            <h3 class="font-bold md:text-2xl text-sm md:p-5 p-1"><span style={{color:'orange'}}>HDL</span> Gen Hub <span class="font-thin">for learners</span></h3>
            <h1 class="font-extrabold lg:text-7xl md:p-3 p-1 text-3xl">Fast & easiest</h1>
            <h1 class="font-extrabold lg:text-7xl md:p-3 p-1  text-3xl"> way to</h1>
            <h1 class="font-extrabold lg:text-7xl md:p-3 p-1 text-3xl">learn <span style={{color:'orange'}}>HDL</span></h1>
          </div>
          <img src={homeimage} alt="Home" class="lg:h-96 h-40 mt-20 md:mt-20"/>
        </div>
        <div class="h-0.5 bg-gray-200">
        </div>
        <p class='font-extrabold text-xl center md:m-14 m-10 md:mb-0 mb-0'>Exclusive content, exceptional quality</p>
        <div class='text-center center md:m-10 m-5 mb-16'>
          <h class='md:text-xl text-gray-500 text-justify'>
            Unlock the world of HDLs through our immersive e-learning platform. 
            From beginner basics to advanced techniques, dive into digital design at your own pace.
            Engage, practice, and connect in a community-driven space designed for mastering hardware description languages.</h>
        </div>
        
        <div class='md:flex md:flex-row md:justify-around flex justify-center flex-col gap-16 items-center md:m-20 mt-0 mb-10'>
          <div class='w-64 h-48 bg-neutral-200 shadow-lg rounded-ss-3xl rounded-ee-3xl'>
            <p class="text-3xl font-bold text-amber-500 m-5">100+</p>
            <p class="text-xl font-bold text-center m-2 mt-0">hours of content to gain knowledge <br/>(updating regularly)</p>
          </div>
          <div class='w-64 h-48 bg-neutral-200 shadow-lg rounded-ss-3xl rounded-ee-3xl'>
            <p class="text-3xl font-bold text-amber-500 m-5 mb-3">100+</p>
            <p class="text-xl font-bold text-center m-5 mt-0">expert from the university with the best guidance</p>
          </div>
          <div class='w-64 h-48 bg-neutral-200 shadow-lg rounded-ss-3xl rounded-ee-3xl'>
            <p class="text-3xl font-bold text-amber-500 m-5 mb-3">350+</p>
            <p class="text-xl font-bold text-center m-3 mt-0">users to unleash their Potential through E-Learning Excellence</p>
          </div>
        </div>
        <div>
      </div>
      <div class="bg-black md:h-64 h-80 md:rounded-ss-3xl md:rounded-t-3xl rounded-ss-2xl rounded-t-2xl mt-10">
        <h1 class="text-white md:m-10 m-5 md:text-2xl text-lg font-bold">Job-ready talent, Superior outcomes</h1>
        <div class="flex text-white justify-around">
          <div class="md:flex md:w-60 gap-5 w-20 m-2">
            <img src={notes} alt='note' class="md:w-20 mb-5 md:h-20"/>
            <p>Curriculum co-created with industry leaders</p>
          </div>
          <div class="md:flex md:w-60 gap-5 w-20 m-2">
            <img src={settings} alt='note' class="w-20 mb-5"/>
            <p>Personalized feedback ensures mastery</p>
          </div>
          <div class="md:flex md:w-60 gap-5 w-20 m-2">
            <img src={work} alt='note' class="w-20 mb-5"/>
            <p>Hands-on projects, not step-by-step guides</p>
          </div>
          <div class="md:flex md:w-60 gap-5 w-20 m-2">
            <img src={world} alt='note' class="w-20 mb-5"/>
            <p class="mt-2">10+ highly vetted expert network</p>
          </div>
        </div>
      </div>
        

      </div>
    );
  }

export default Home