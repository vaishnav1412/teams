import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./home.css"

const Body = () => {
    const settings = {
    
        infinite: true,
        speed: 38000,
        slidesToShow: 1,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 200
    };
    const instructions = [
        "The website will be available only after 12/02/2025.",
        "The website will be available only after 12/02/2025.",
        "The website will be available only after 12/02/2025.",
    ];
  return (
    <div className="">

<Slider {...settings}>
                {instructions.map((instruction, index) => (
                    <div className="w-full" key={index}>
                        <h3 className="text-red-700">{instruction}</h3>
                    </div>
                ))}
            </Slider>
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-200 text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230315/pngtree-dancing-people-colorful-abstract-background-image_1948409.jpg"
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
            
            <div className="dark:text-gray-800 flex flex-col">
             
            

               
                <div class="">
  <div className="w-full text-center">
    <label for="hs-trailing-icon" class="block text-5xl font-medium mb-2 text-yellow-300 ">SOON....</label>
   
  </div>
</div>
               
               
                
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
