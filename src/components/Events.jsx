import SlideShow from "./SlideShow";
import { useRef } from "react";

const Events = ({ eventsRef }) => {
  return (
    <div ref={eventsRef} className="bg-teal-700 self-stretch flex w-full flex-col justify-center items-center mt-28 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-full max-w-[992px] flex-col mt-9 mb-8 max-md:max-w-full">
        <SlideShow />
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
          <div className="flex flex-col max-md:max-w-full">
            <div className="text-white text-3xl font-bold self-stretch max-md:max-w-full">
              Raise funds for specific campaigns
            </div>
            <div className="text-white text-sm self-stretch mt-7 max-md:max-w-full">
              Lorem ipssui in i neri ei ien id vievnnier vieif
            </div>
            <div className="text-white text-sm self-stretch mt-3 max-md:max-w-full">
              Lorem ipssui in i neri ei ien id vievnnier vieif
            </div>
            <div className="text-white text-sm self-stretch mt-3 max-md:max-w-full">
              Lorem ipssui in i neri ei ien id vievnnier vieif
            </div>
            <div className="flex items-stretch gap-1 mt-9 self-start">
              <button className="text-amber-200 text-xs font-bold grow whitespace-nowrap">
                Learn More
              </button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fbe006f9a3b2b4749f32bda6461370fe98e3368fc5068e8d8bb8bedd4872649?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&"
                className="aspect-[1.5] object-contain object-center w-[9px] fill-amber-200 stroke-[1px] stroke-amber-200 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
