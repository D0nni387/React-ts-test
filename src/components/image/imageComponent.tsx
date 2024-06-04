import { useState } from 'react';
import './card.css';
import { Image } from '../../interfaces/image';

const ImageComponent = ({ image }: { image: Image }) => {
  const [currentImage, setCurrentImage] = useState<Image>(image);

  const calculateRating = (rating: any, ratingCount: number) => {
    return (rating as number) * ratingCount || 0;
  };

  return (
    <div className='card'>
      <div className='card__header'>
        <img src={currentImage.url} alt='sample1' />
      </div>
      <div style={{ textAlign: 'center', height: '250px' }}>
        <span style={{ color: '#238383' }} className='card__body__date'></span>
        <h5 className='card__body__head' style={{ color: '#000' }}>
          {currentImage.name}
        </h5>
      </div>
      <div className='card__footer'>
        <div className='card__Footer__first'>
          <div>
            <p>
              {calculateRating(currentImage.rating, currentImage.rating_count)}{' '}
              / 5
            </p>
          </div>
          <label>Ratng</label>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
