import React, { useState } from "react";

const images = [
  { src: "/src/assets/food/food-1.jpg" },
  { src: "/src/assets/food/food-2.jpg" },
  { src: "/src/assets/food/food-3.jpg" },
  { src: "/src/assets/food/food-4.jpg" },
  { src: "/src/assets/food/food-5.jpg" },
  { src: "/src/assets/food/food-6.jpg" },
  { src: "/src/assets/food/food-7.jpg" },
  { src: "/src/assets/food/food-8.jpg" },
  { src: "/src/assets/food/food-9.jpg" },
  { src: "/src/assets/food/food-10.jpg" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-[40px] font-bold text-center mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={`Food ${i + 1}`}
            className="w-full h-[200px] object-cover rounded-lg cursor-pointer hover:opacity-75 transition"
            onClick={() => setSelectedImage(image.src)}
          />
        ))}
      </div>

      {/* Modal (Popup) for Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-[90%] max-h-[90%]">
            <button
              className="absolute top-3 right-3 bg-white text-black p-2 rounded-full hover:bg-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img src={selectedImage} alt="Preview" className="max-w-full max-h-screen rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
