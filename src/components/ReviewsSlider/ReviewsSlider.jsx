
import ArrowLeft from '../../images/reviews-arrow-left.svg';
import ArrowRight from '../../images/reviews-arrow-right.svg';
import {
  ReviewsHeader,
  ButtonArrow,
  ButtonList,
  UserReviewsBlock,
  ReviewsWrapper,
} from './ReviewsSlider.styled';
import ReviewsBox from './ReviewsBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';


import { useFetchReviewsQuery } from '../../redux/reviews/reviewsApi'
import Slider from 'react-slick';
import Spiner from '../Spiner/Spiner';

export default function ReviewsSlider() {
    const {data: reviews, error, isFetching } = useFetchReviewsQuery();
  
   
    const handlePrevious = () => {
      slider?.slickPrev();
    };

    const handleNext = () => {
      slider?.slickNext();
    };

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let slider = null;
  
  return (
    <ReviewsWrapper>
      <ReviewsHeader>Reviews</ReviewsHeader>
      {reviews && reviews.length > 0 ? (
        <>
          <UserReviewsBlock>
            <Slider {...sliderSettings} ref={c => (slider = c)}>
              {reviews.map(item => {
                const avatarUrl = item
                  ? item.avatarURL
                  : 'https://i.pinimg.com/originals/1e/2a/3c/1e2a3c967414574c5c728715cba165d5.jpg';

                return (
                  <ReviewsBox
                    key={item._id}
                    avatarUrl={avatarUrl}
                    name={item.userName}
                    rating={item.rating}
                    comment={item.review}
                  />
                );
              })}
            </Slider>
          </UserReviewsBlock>
          <ButtonList>
            <ButtonArrow onClick={handlePrevious}>
              <img src={ArrowLeft} alt="Scroll left to review" />
            </ButtonArrow>
            <ButtonArrow onClick={handleNext}>
              <img src={ArrowRight} alt="Scroll right to review" />
            </ButtonArrow>
          </ButtonList>
        </>
      ) : (
        <Spiner />
      )}
    </ReviewsWrapper>
  );
}