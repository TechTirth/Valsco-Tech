import Hero from "./components/Hero";
import Header from "./components/Header";
import Trusted from "./components/Trusted";
import AboutUs from "./components/AboutUs";
import Ourservice from "./components/Ourservice";
import Events from "./components/Events";
import ContactUs from "./components/ContactUs";
import DonateUs from "./components/DonateUs";
import { useRef } from "react";


export default function App() {
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);
  const donateUsRef = useRef(null);
  const eventsRef = useRef(null);

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDonateUs = () => {
    if (donateUsRef.current) {
      donateUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToEvent = () => {
    if (eventsRef.current) {
      eventsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div className="bg-white flex flex-col">
      <div className="bg-teal-700 self-stretch flex w-full flex-col items-center pl-20 pr-8 pt-6 pb-20 max-md:max-w-full max-md:px-5">
        <Header scrollToAboutUs={scrollToAboutUs} scrollToContact={scrollToContact} scrollToDonateUs={scrollToDonateUs} scrollToEvent={scrollToEvent}/>
        <Hero />
      </div>
      <div className="self-center z-[1] flex mt-0 w-full max-w-[1209px] flex-col items-stretch max-md:max-w-full">
        <Trusted />
        <AboutUs aboutUsRef={aboutUsRef}  />
        <Ourservice />
      </div>
      <Events eventsRef={eventsRef}/>
      <DonateUs donateUsRef={donateUsRef} />
      <ContactUs contactUsRef={contactUsRef}/>
    </div>
  );
}
