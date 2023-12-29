import Header from "./Header";

const Hero = () => {
  return (
    <div className="w-full max-w-[1186px] mt-12 mb-9 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div className="text-white text-6xl font-medium self-stretch max-md:max-w-full max-md:text-4xl">
              <span className="hover:border-b-4 hover:border-yellow-500 transition duration-300">
                Charity is
              </span>{" "}
            </div>
            <div className="text-white text-6xl font-medium self-stretch mt-4 max-md:max-w-full max-md:text-4xl">
              <span className="hover:border-b-4 hover:border-yellow-500 transition duration-300">
                an Act of
              </span>
            </div>
            <div className="text-white text-6xl font-medium self-stretch mt-4 max-md:max-w-full max-md:text-4xl">
              <span className="hover:border-b-4 hover:border-yellow-500 transition duration-300">
                A Soft Heart!
              </span>
            </div>

            <div className="text-white py-4 text-xs self-stretch mt-6 max-md:max-w-full">
              Our company provides software products and services to businesses
              individuals to help them meet their software needs. We strive to
              specialize in developing software solutions tailored to the unique
              needs of our clients.
            </div>
            <div className="flex items-stretch justify-between gap-2 ml-2.5 mt-6 self-start">
              <button className="text-teal-700 text-xs whitespace-nowrap bg-amber-200 grow justify-center items-stretch px-6 py-4 max-md:px-5 hover:bg-orange-300">
                Get Started
              </button>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4a09ffb4-1ad8-4db8-a2e5-9a1db9d108e4?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a09ffb4-1ad8-4db8-a2e5-9a1db9d108e4?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a09ffb4-1ad8-4db8-a2e5-9a1db9d108e4?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a09ffb4-1ad8-4db8-a2e5-9a1db9d108e4?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a09ffb4-1ad8-4db8-a2e5-9a1db9d108e4?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a09ffb4-1ad8-4db8-a2e5-9a1db9d108e4?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a09ffb4-1ad8-4db8-a2e5-9a1db9d108e4?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a09ffb4-1ad8-4db8-a2e5-9a1db9d108e4?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&"
                className="aspect-square object-contain object-center w-4 stroke-[1px] overflow-hidden self-center shrink-0 max-w-full my-auto rounded-[50%]"
              />
              <div className="text-white text-xs self-center grow whitespace-nowrap my-auto">
                How It Works
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0 relative">
          <div className="shadow-md flex flex-col justify-center items-stretch w-full p-12 rounded-[50%] max-md:max-w-full max-md:mt-7 max-md:px-5 overflow-hidden relative">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2323e00710a3ce7fe5d9ed7c5d5fba95be91e7a9268bda2a84eba57d62f4ef9d?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2323e00710a3ce7fe5d9ed7c5d5fba95be91e7a9268bda2a84eba57d62f4ef9d?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2323e00710a3ce7fe5d9ed7c5d5fba95be91e7a9268bda2a84eba57d62f4ef9d?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2323e00710a3ce7fe5d9ed7c5d5fba95be91e7a9268bda2a84eba57d62f4ef9d?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2323e00710a3ce7fe5d9ed7c5d5fba95be91e7a9268bda2a84eba57d62f4ef9d?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2323e00710a3ce7fe5d9ed7c5d5fba95be91e7a9268bda2a84eba57d62f4ef9d?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2323e00710a3ce7fe5d9ed7c5d5fba95be91e7a9268bda2a84eba57d62f4ef9d?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2323e00710a3ce7fe5d9ed7c5d5fba95be91e7a9268bda2a84eba57d62f4ef9d?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&"
              className="aspect-square object-contain object-center w-full overflow-hidden rounded-[50%]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-50 rounded-[50%]"></div>
          </div>
        </div>

        <div className="flex flex-col items-stretch w-[17%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow items-stretch gap-2 mt-96 max-md:mt-10">
            <button className="text-teal-700 text-lg whitespace-nowrap bg-amber-200 grow justify-center items-stretch px-5 py-4 rounded-[41px] hover:bg-orange-300">
              Donate Now
            </button>
            <button>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d89cf83f-0d64-4928-bd4d-92e24018e8c5?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89cf83f-0d64-4928-bd4d-92e24018e8c5?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89cf83f-0d64-4928-bd4d-92e24018e8c5?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89cf83f-0d64-4928-bd4d-92e24018e8c5?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89cf83f-0d64-4928-bd4d-92e24018e8c5?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89cf83f-0d64-4928-bd4d-92e24018e8c5?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89cf83f-0d64-4928-bd4d-92e24018e8c5?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89cf83f-0d64-4928-bd4d-92e24018e8c5?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&"
                className="aspect-[0.98] object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
