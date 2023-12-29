import React, { useEffect, useState, useRef } from "react";

const Frame = () => {
  return (
    <div className="relative w-full h-[597px] md:w-[701px] md:h-[597px]">
      <div className="absolute w-[643px] h-[551px] top-[32px] left-[35px]">
        <div className="absolute w-[439px] h-[551px] top-0 left-0">
          <div className="absolute w-[416px] h-[445px] top-0 left-0">
            <div className="flex max-w-[325px] flex-col items-stretch">
              <img className="bg-zinc-300 absolute flex min-h-[210px] w-[213px] flex-col " />
              <img className="bg-zinc-300 object-position-right-20px absolute mt-[120px]  flex w-[213px] shrink-0 h-[200px] flex-col self-end left-[230px]" />
            </div>
            <img className="absolute w-[213px] h-[211px] top-[234px] left-0 bg-[#d9d9d9]" />
          </div>
          <img className="absolute w-[213px] h-[211px] top-[340px] left-[230px] bg-[#d9d9d9]" />
        </div>
        <img className="absolute w-[213px] h-[200px] top-[150px] left-[460px] mt-[75px] bg-[#d9d9d9]" />
      </div>
      <img className="absolute w-px h-px top-0 left-[17px] bg-[#d9d9d9]" />
    </div>
  );
};

const AboutUs = ({ aboutUsRef }) => {
  return (
    <div ref={aboutUsRef} className="mt-10 md:mt-36 max-md:max-w-full">
      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="flex flex-col items-stretch w-full md:w-[45%] md:ml-0">
          <div className="flex flex-col max-md:max-w-full max-md:mt-3.5">
            <div className="text-teal-700 text-lg self-stretch max-md:max-w-full">
              About us
            </div>
            <div className="text-black text-5xl font-medium self-stretch mt-8 max-md:max-w-full max-md:text-4xl inline-block border-b-4 border-yellow-400">
              Who are we?
            </div>

            <div className="text-black text-xs self-stretch mt-12 max-md:max-w-full max-md:mt-10">
              Valsco specializes in developing custom software solutions
              tailored to meet the unique needs of clients, recognizing the
              significant decision businesses make when investing in software.
              Beyond software development, we offer comprehensive services
              encompassing consulting, training, and support to ensure clients
              maximize the benefits of their visions. With a focus on innovation
              and development, we continually explore new technologies, methods,
              and processes to create software solutions that are efficient,
              effective, and user-friendly. Simultaneously, we prioritize
              improving our products, processes, and services through regular
              evaluations and identification of areas for enhancement. Our
              commitment to continuous improvement ensures our company
              consistently delivers the highest quality, providing maximum value
              to our customers. The team, consisting of experienced developers,
              designers, and project managers, collaborates closely with clients
              to ensure that their software solutions not only meet
              user-friendly standards but also exhibit efficiency and
              effectiveness.
            </div>

            <button className="text-teal-700 text-xs whitespace-nowrap bg-amber-200 justify-center items-stretch mt-16 px-7 py-4 self-start max-md:mt-10 max-md:px-5 hover:bg-orange-300">
              Learn More
            </button>
          </div>
        </div>
        <Frame />
      </div>
    </div>
  );
};

export default AboutUs;
