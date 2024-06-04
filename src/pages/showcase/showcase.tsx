import React, { useEffect, useState } from 'react';
import ImageComponent from '../../components/image/imageComponent';
import { Image } from '../../interfaces/image';
import mockApi from '../../services/api/mockApi';

const Showcase = () => {
  const [images, setImages] = useState<Image[]>([]);

  const getImages = async () => {
    const apiResp = mockApi();
    setImages(apiResp.results);
  };

  const resolveDayNight = (): any => {
    var time = new Date().getHours();

    if (time > 6 && time < 18) {
      return 'night';
    } else {
      return 'day';
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h4>Welcome to your feed</h4>
      <h4>Have a great {resolveDayNight()}</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageComponent key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};

export default Showcase;
