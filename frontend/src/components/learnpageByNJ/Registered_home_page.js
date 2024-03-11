import React from "react";
import "./Registered_home_page.css"; // Import your custom CSS
import img from "../../images/learning.jpg"; // Import your image
import img2 from "../../images/course-2.jpg"; // Import your image
import img3 from "../../images/course-3.jpg"; // Import your image
import img4 from "../../images/course-4.jpg"; // Import your image
import img5 from "../../images/course-5.jpg"; // Import your image
import img6 from "../../images/course-6.webp"; // Import your image
import img7 from "../../images/course-7.webp"; // Import your image


const Registered_home_page = () => {
  return (
    <div className="registered-home-page-container">
      <div class="text-2xl text-left p-5 ml-10">
        <h1>Explore Learning Paths</h1>
      </div>

      <div className="content">
        <div class=" ">
          <figure class="ml-10 mr-10 filter grayscale-0 hover:brightness-125 ">
            
            <img class="rounded-2xl size-full h-80" src={img} alt="product"/>
            
            <div>
              <figcaption class="absolute text-white bottom-20 grid grid-cols-2 ml-10 grid-rows-1 grid-flow-row gap-20">
                <div class="text-left">
                    <h1 class="text-5xl p-3 mt-8 ml-20">Explore Lessons...</h1>
                    <p class="text-lg ml-20 mt-3">
                    From beginner basics to advanced techniques, dive into digital
                    design for mastering hardware description languages.
                    </p>
                </div>
                <div className="learning-path "> 
                  <button class="drop-shadow-lg rounded-tr-3xl rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500">Introduction to HDL</button>
                  <button class="drop-shadow-lg rounded-tr-3xl rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500">Basic Syntax</button>
                  <button class="drop-shadow-lg rounded-tr-3xl rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500">Combinational Logic</button>
                  <button class="drop-shadow-lg rounded-tr-3xl rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500">Sequential Logic</button>
                </div>
            </figcaption>
            </div>
            
          </figure>
        </div>
        <div class="text-left text-2xl m-10 mb-0 ml-20">
            <h1>Personalized Courses for You</h1>
        </div>
      </div>

      <div class="p-10">

    <div class="grid grid-cols-3 ml-10 grid-rows-2 grid-flow-row gap-20 hover:brightness-110">
        <div class="hover:brightness-150 rounded-2xl hover:drop-shadow-2xl drop-shadow-xl bg-gray-800">
            <a href="#">
                <img class=" p-5 pb-0" src={img2} alt="HDL" />
                <h5 class="text-2xl font-bold tracking-tight p-5 text-left text-white">Introduction to HDL</h5>
                <p class=" p-5 pt-0 font-normal text-left text-gray-400">Course</p>
            </a>
        </div>
        <div class="hover:brightness-150 rounded-2xl shadow bg-gray-800 ">
            <a href="#">
                <img class=" p-5 pb-0" src={img3} alt="HDL" />
                <h5 class="text-2xl font-bold tracking-tight p-5 text-left text-white">Basic Syntax</h5>
                <p class=" p-5 pt-0 font-normal text-left text-gray-400">Course</p>
            </a>
        </div>
        <div class="hover:brightness-150 rounded-2xl shadow bg-gray-800 ">
            <a href="#">
                <img class=" p-5 pb-0" src={img4} alt="HDL" />
                <h5 class="text-2xl font-bold tracking-tight p-5 text-left text-white">Combinational Logic</h5>
                <p class=" p-5 pt-0 font-normal text-left text-gray-400">Course</p>
            </a>
        </div>
        <div class="hover:brightness-150 rounded-2xl shadow bg-gray-800 ">
            <a href="#">
                <img class=" p-5 pb-0" src={img5} alt="HDL" />
                <h5 class="text-2xl font-bold tracking-tight p-5 text-left text-white">Sequential Logic</h5>
                <p class=" p-5 pt-0 font-normal text-left text-gray-400">Course</p>
            </a>
        </div>
        <div class="hover:brightness-150 rounded-2xl shadow bg-gray-800 ">
            <a href="#">
                <img class=" p-5 pb-0" src={img6} alt="HDL" />
                <h5 class="text-2xl font-bold tracking-tight p-5 text-left text-white">Circuit Design</h5>
                <p class=" p-5 pt-0 font-normal text-left text-gray-400">Course</p>
            </a>
        </div>
        <div class="hover:brightness-150 rounded-2xl shadow bg-gray-800">
            <a href="#">
                <img class=" p-5 pb-0" src={img7} alt="HDL" />
                <h5 class="text-2xl font-bold tracking-tight p-5 text-left text-white">Introduction to Verilog</h5>
                <p class=" p-5 pt-0 font-normal text-left text-gray-400">Course</p>
            </a>
        </div>
    </div>
    

    </div>
    </div>
  );
};

export default Registered_home_page;