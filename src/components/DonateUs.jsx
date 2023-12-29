import { useRef } from "react";

const DonateUs = ({ donateUsRef }) => {
  return (
    <div
      ref={donateUsRef}
      className="bg-zinc-300 flex flex-row w-full justify-start mt-[40px] items-start max-md:max-w-full max-md:mt-10 max-md:pr-5"
    >
      <div className="fill-teal-600 overflow-hidden relative flex min-h-[514px] w-[744px] max-w-full justify-center items-center px-16 py-12 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3187700ccc4d393af120562f68e7eea57c210e2fa21e5304fedd780ea3889845?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex w-[356px] max-w-full flex-col mt-16 mb-9 max-md:mt-10">
          <div className="text-white text-5xl font-bold self-stretch mt-1 max-md:text-4xl">
            The Way You
          </div>
          <div className="text-white text-5xl font-bold self-stretch mt-1 max-md:text-4xl">
            Help Us!
          </div>
          <div className="text-white text-xs self-stretch whitespace-nowrap mt-6">
            iovno os coi eiv w tri nvowi ie eoi eio eio vnvoi ioei ieo ito eio io{" "}
          </div>
          <div className="text-white text-xs self-stretch whitespace-nowrap mt-4">
            iovno os coi eiv w tri nvowi ie eoi eio eio vnvoi ioei ieo ito eio io{" "}
          </div>
          <button className="text-teal-700 text-xs whitespace-nowrap bg-amber-200 justify-center items-stretch mt-6 px-7 py-5 self-start max-md:px-5 hover:bg-orange-300">
            Donate Now
          </button>
        </div>
      </div>
      <div className=" ml-auto" style={{ width: "744px", height: "514px" }}>
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.176800829831!2d77.32669900000002!3d28.58212!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce456aaaaaaab%3A0x9493f3c277803ba7!2sVALSCO%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1703765993283!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="responsive google map"
        ></iframe>
      </div>
    </div>
  );
};

export default DonateUs;
