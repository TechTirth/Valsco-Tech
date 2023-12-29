import { useState, useEffect } from "react";
import image1 from "/one.jpg"
import image2 from "/two.jpg"
import image3 from "/three.jpg"
import image4 from "/four.jpg"
import image5 from "/five.jpg"
import image6 from "/six.jpg"

const SlideShow = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([image1, image2, image3, image4, image5, image6])
  
  useEffect(()=>{
    setInterval(()=>{
      setSelectedImage(selectedImage=>selectedImage > 3 ? 0 : selectedImage+1)
    },2000)
  },[])
  
  return (
    <>
      <div className="text-white text-4xl font-bold self-stretch max-md:max-w-full">
        Our Exclusive Events
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/19c28039aeff5d1ff960a512226635b4660592da906b296fd13de265dc13fa9b?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&"
        className="aspect-[36.5] object-contain object-center w-[292px] stroke-[8px] stroke-amber-200 overflow-hidden max-w-full ml-20 self-start max-md:ml-2.5"
      />
      <div className="self-stretch flex w-full items-center justify-between gap-5 mt-2 px-0.5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-white text-4xl font-bold grow shrink basis-auto my-auto">
          We provide!
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-4">
          <button onClick={()=>{
            if( selectedImage > 0)
            setSelectedImage(selectedImage-1)
          }}>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/29a7d99f-b4a6-4bff-85cf-8faf05c0a4ca?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/29a7d99f-b4a6-4bff-85cf-8faf05c0a4ca?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/29a7d99f-b4a6-4bff-85cf-8faf05c0a4ca?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/29a7d99f-b4a6-4bff-85cf-8faf05c0a4ca?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/29a7d99f-b4a6-4bff-85cf-8faf05c0a4ca?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/29a7d99f-b4a6-4bff-85cf-8faf05c0a4ca?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/29a7d99f-b4a6-4bff-85cf-8faf05c0a4ca?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/29a7d99f-b4a6-4bff-85cf-8faf05c0a4ca?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&"
              className="aspect-[1.02] object-contain object-center w-[46px] overflow-hidden shrink-0 max-w-full"
            />
          </button>
          <button onClick={()=>{
            if( selectedImage < allImages.length - 1)
            setSelectedImage(selectedImage+1)
          }}>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a3655756-77f8-4c28-8ef3-2d5973927156?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3655756-77f8-4c28-8ef3-2d5973927156?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3655756-77f8-4c28-8ef3-2d5973927156?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3655756-77f8-4c28-8ef3-2d5973927156?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3655756-77f8-4c28-8ef3-2d5973927156?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3655756-77f8-4c28-8ef3-2d5973927156?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3655756-77f8-4c28-8ef3-2d5973927156?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3655756-77f8-4c28-8ef3-2d5973927156?apiKey=3aa61f2845c64ac2a500b31bb38a51f8&"
              className="aspect-[1.02] object-contain object-center w-[46px] overflow-hidden shrink-0 max-w-full"
            />
          </button>
        </div>
      </div>
      <img src={allImages[selectedImage]} className="bg-zinc-300 self-stretch flex shrink-0 h-[500px] flex-col mt-11 max-md:max-w-full max-md:mt-10" />
    </>
  );
};

export default SlideShow;