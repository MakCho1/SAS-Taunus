import React, { useState } from "react";
import img1 from "../assets/gallery/img1.jpeg";
import img2 from "../assets/gallery/img2.jpeg";
import img3 from "../assets/gallery/img3.jpeg";
import img4 from "../assets/gallery/img4.jpeg";
import img5 from "../assets/gallery/img5.jpeg";
import img6 from "../assets/gallery/img6.jpeg";
import img7 from "../assets/gallery/img7.jpeg";
import img8 from "../assets/gallery/img8.jpeg";
import "./Gallery.css";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function Gallery() {
  console.log("✅ Die Gallery-Komponente wurde geladen!");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="gallery">
      <h2>Unsere Arbeiten</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Galeriebild ${index + 1}`}
            onClick={() => handleImageClick(index)}
            className="gallery-thumb"
          />
        ))}
      </div>

      {isOpen && (
        <div className="gallery-lightbox" onClick={() => setIsOpen(false)}>
          <div className="gallery-overlay"></div>
          <img
            src={images[photoIndex]}
            className="gallery-expanded"
            alt="Großes Bild"
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
