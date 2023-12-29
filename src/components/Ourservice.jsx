import Projects from "./Projects";

const Ourservice = () => {
  return (
    <div className="mt-[100px]">
      <div className="text-black text-4xl font-bold self-stretch mb-3">
        Our Projects!
      </div>

      <div className="text-black text-4xl whitespace-nowrap font-bold self-stretch mt-3 mb-[50px]">
        Services we provide:
      </div>
      <div className="flex">
        <Projects title="Health Mangament Project" />
        <Projects title="Health Mangament Project" />
        <Projects title="Health Mangament Project" />
      </div>
      <div className="flex mt-5">
      <Projects title="Health Mangament Project" />
      <Projects title="Health Mangament Project" />
      <Projects title="Health Mangament Project" />
      </div>
    </div>
  );
};

export default Ourservice;
