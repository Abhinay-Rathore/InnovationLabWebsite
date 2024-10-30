import '../styles/slider.css'; 
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const [imageLinks, setImageLinks] = useState([]);
  const folderId = '126qTT7sPi0MQgFgOttKGwWl9aKyuZ4sJ'; 
  const apiKey = 'AIzaSyAjTf2BaoCVkvoSkac-zRh4JJI9H2BByQs'; 
  useEffect(() => {
    const fetchImages = async () => {
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        const imageFiles = [] ;
        for(var i = 0 ; i<data.files.length ;i++){
          imageFiles.push(data.files[i].id) ;
        }
  
        const links = [] ;
        for(var j = 0 ; j<imageFiles.length ;j++){
          links.push(`https://drive.google.com/thumbnail?&id=${imageFiles[j]}`) ;
        }

        setImageLinks(links);
        
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [folderId, apiKey]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    
    <div className="slider-container">
      {imageLinks.length > 0 ? (
        <Slider {...settings}>
          {imageLinks.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
  
};

export default ImageSlider;