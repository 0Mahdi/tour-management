import React from 'react';
import TourCard from '../../shared/TourCard';
import { Col } from 'react-bootstrap';
import tourData from '../../assets/data/tours'

const FeaturedTourList = () => {

  return (
    <>
      { tourData?.map(tour => (
        <Col lg='3' className='mb-4' key={tour._id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;