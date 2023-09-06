import { Trans } from 'react-i18next';

import {
  ReviewsHeader,
  ButtonArrow,
  ButtonList,
  UserReviewsBlock,
  ReviewsWrapper,
  Svg,
} from './ReviewsSlider.styled';
import ReviewsBox from './ReviewsBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';

import { useFetchReviewsQuery } from '../../redux/reviews/reviewsApi';
import Slider from 'react-slick';
import Spiner from '../Spiner/Spiner';

export default function ReviewsSlider() {
  const { data: reviews, isFetching } = useFetchReviewsQuery();

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
      <ReviewsHeader>
        <Trans i18nKey="reviewsSlider.header">Reviews</Trans>
      </ReviewsHeader>
      {isFetching ? (
        <Spiner />
      ) : (
        <>
          <UserReviewsBlock>
            <Slider {...sliderSettings} ref={c => (slider = c)}>
              {reviews?.data.map(item => {
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
              <Svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0368 26.6676L10.1573 25.3896L45.9019 25.3886V24.3886L10.3813 24.3896L12.1518 23.3721L11.6538 22.5051L7.57934 24.8461L11.4743 27.4946L12.0368 26.6676Z"
                  fill="#111111"
                />
              </Svg>
            </ButtonArrow>
            <ButtonArrow onClick={handleNext}>
              <Svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_182_6723)">
                  <path
                    d="M33.865 23.1097L35.7445 24.3877L0 24.3887L0 25.3887L35.5205 25.3877L33.75 26.4052L34.248 27.2722L38.3225 24.9312L34.4275 22.2827L33.865 23.1097Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_182_6723">
                    <rect
                      width="50"
                      height="50"
                      transform="matrix(0 -1 1 0 0 50)"
                    />
                  </clipPath>
                </defs>
              </Svg>
            </ButtonArrow>
          </ButtonList>
        </>
      )}
    </ReviewsWrapper>
  );
}
