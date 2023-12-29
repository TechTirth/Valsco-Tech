import { useRef } from "react";

const ContactUs = ({ contactUsRef }) => {
  return (
    <div ref={contactUsRef} className="bg-teal-900 text-white p-8 flex justify-center items-center h-screen mt-[40px]">
      <div>
        <div className="text-4xl font-bold mb-8">Contact Us</div>
        <form className="w-[450px] mt-6">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-md bg-teal-500 text-white focus:outline-none focus:ring focus:border-teal-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-md bg-teal-500 text-white focus:outline-none focus:ring focus:border-teal-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded-md bg-teal-500 text-white focus:outline-none focus:ring focus:border-teal-300"
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-amber-300 rounded-md text-white font-bold hover:bg-amber-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
