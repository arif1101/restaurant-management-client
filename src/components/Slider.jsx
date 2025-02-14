import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/src/assets/food/slider-1.jpg",
  "/src/assets/food/slider-2.jpg",
  "/src/assets/food/slider-3.jpg",
  "/src/assets/food/slider-4.jpg",
  "/src/assets/food/slider-1.jpg",
  "/src/assets/food/slider-3.jpg",
];

const GalleryCarousel = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          1024: { slidesPerView: 3 }, // Desktop
          768: { slidesPerView: 2 },  // Tablet
          480: { slidesPerView: 1 },  // Mobile
        }}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryCarousel;
