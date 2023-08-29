
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
   
    const {  data: reviews, isFetching } = useFetchReviewsQuery();
  
   
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
      {isFetching ? (
        <Spiner />
      ) : (
        <>
          <UserReviewsBlock>
            <Slider {...sliderSettings} ref={c => (slider = c)}>
              {reviews.data.map(item => {
                const avatarUrl = item.avatarURL || null;

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
      ) 
      }
    </ReviewsWrapper>
  );
}