import React from "react";
import img2 from "../../images/about.png";
import About2 from "../../images/About2.jpg";
import About3 from "../../images/About3.jpg";

function About() {
  return (
    <div>
      <div class="mt-20 md:mt-10" style={{ display: "flex" }}>
        <div class="font-bold md:mt-20 md:m-20 md:ml-40 md:w-11/12 w-4/6">
          <p class="md:text-7xl text-2xl md:text-left p-2 md:my-5 md:mt-20 mt-10">
            Learn today,
          </p>
          <p class="md:text-7xl text-2xl md:text-left p-2">Lead tomorrow</p>
        </div>
        <div class="md:mt-16 md:mr-400px md:w-3/4 w-96">
          <img src={img2} alt="learn" />
        </div>
      </div>
      <div className="md:h-16 h-10 bg-orange-400"></div>
      <p class="md:text-4xl text-2xl font-bold text-gray-700 m-12 text-center">
        Welcome to <span class="text-amber-600 font-extrabold"> HDL </span>
        <span class="font-extrabold text-black">Gen Hub</span>
      </p>
      <p class="text-md md:text-lg text-gray-500 m-10 text-justify md:text-center">
        At HDL Gen Hub, we are dedicated to revolutionizing education by
        offering a dynamic and comprehensive platform tailored to your learning
        needs. Our mission is to empower individuals globally by providing
        accessible, high-quality education that transcends boundaries.
      </p>
      <hr class=""></hr>
      <div class="flex items-center">
        <div class="text-left md:ml-24 ml-10">
          <h2 class="font-bold md:mb-16 text-gray-700 md:text-4xl">Our Story</h2>
          <p class="mt-5 text-gray-600 text-sm md:text-lg md:w-4/5 text-justify md:text-left">
            Established by a team of passionate educators and tech enthusiasts,
            HDL Gen Hub was born from the belief that education should be
            engaging, interactive, and adaptable. We understand the evolving
            landscape of learning and aim to bridge the gap between traditional
            education and the digital era.
          </p>
        </div>
        <img class="md:w-1/3 w-56 mr-5 mt-5" src={About2} alt="learn" />
      </div>
      <div class="flex items-center">
        <img class="md:w-1/3 w-56" src={About3} alt="learn" />
        <div class="text-left m-10">
          <h2 class="font-bold md:m-10 ml-0 text-gray-700 md:text-4xl">Our Commitment</h2>
          <p class="mt-5 md:m-10 text-gray-600 text-sm md:text-lg md:w-4/5 text-justify md:text-left">
            We are committed to fostering a community of learners where
            curiosity thrives, knowledge is shared, and growth is limitless.
            Join us in this educational journey, where your success is our
            ultimate goal.
          </p>
        </div>
      </div>
      <div class="bg-gray-300 h-52 text-center rounded rounded-ss-2xl shadow-lg rounded-ee-2xl flex m-20 mt-10 md:m-20 md:mb-36 ml-8 mr-8 pt-5 pb-5 md:justify-around">
        <div class="m-4 md:m-10">
          <h1 class="text-3xl md:text-5xl font-semibold text-orange-500 mb-5">350+</h1>
          <p class="text-gray-600">registered users</p>
        </div>
        <div class="bg-amber-400 w-0.5 h-38 opacity-50"></div>
        <div class="m-4 md:m-5 md:mt-10">
          <h1 class="text-3xl md:text-5xl font-semibold text-orange-500 mb-5">10+</h1>
          <p class="text-gray-600">experts from the university with best guidance</p>
        </div>
        <div class="bg-amber-400 w-0.5 h-38 opacity-50"></div>
        <div class="m-4 md:m-10">
          <h1 class="text-3xl md:text-5xl font-semibold text-orange-500 mb-5">100+</h1>
          <p class="text-gray-600">hours of content of knowledge</p>
        </div>
      </div>
    </div>
  );
}

export default About;
