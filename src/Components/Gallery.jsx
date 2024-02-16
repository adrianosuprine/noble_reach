import { useState, useEffect } from "react";

function Gallery() {
  const [images, setImages] = useState({});

  useEffect(() => {
    fetch(" http://localhost:3000/1")
      .then((response) => response.json())
      .then((data) =>setImages(data))
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
      }, []);
      
  

  return (
    <div className="gallery">
      {Object.keys(images).map((id) => {
        const image = images[id];
        return (
          <div key={id}>
            <img src={image.image} alt={image.title} />
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
