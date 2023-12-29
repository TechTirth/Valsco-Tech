import React from "react";

let Projects = (props) => {
  return (
    <button className="flex flex-col px-8 hover:bg-teal-700">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2f19b641-2c2e-4cb4-b344-0b48629894c9?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f19b641-2c2e-4cb4-b344-0b48629894c9?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f19b641-2c2e-4cb4-b344-0b48629894c9?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f19b641-2c2e-4cb4-b344-0b48629894c9?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f19b641-2c2e-4cb4-b344-0b48629894c9?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f19b641-2c2e-4cb4-b344-0b48629894c9?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f19b641-2c2e-4cb4-b344-0b48629894c9?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f19b641-2c2e-4cb4-b344-0b48629894c9?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&"
        className="aspect-square object-contain object-center w-[60px] overflow-hidden max-w-full self-start "
      />
      <h1 className="text-black text-xl font-bold self-stretch">
        {props.title}
      </h1>
      <p class=" max-w-[300px] mt-[10px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
        voluptates. Quibusdam rem reiciendis, accusamus dolores eos nesciunt
        ipsum, quo corrupti beatae velit quas exercitationem voluptas minus
        natus hic, ad tenetur.
      </p>
    </button>
  );
};

export default Projects;
