import styled from '@emotion/styled';
import { Rating } from 'react-simple-star-rating';

const size = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const ReviewsWrapper = styled.div`
  margin: 0 auto;
  max-width: 335px;

  @media ${device.tablet} {
    max-width: 580px;
  }

  @media ${device.desktop} {
    max-width: 1184px;
  }
`;

export const RatingStar = styled(Rating)`
  .filled-icons :not(:first-of-type) {
    margin-left: 10px;
  }

  .empty-icons :not(:first-of-type) {
    margin-left: 10px;
  }
`;

export const ReviewsHeader = styled.h2`
  text-align: center;
  color: #3e85f3;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 44px;
  }
`;

export const ReviewsBoxStyle = styled.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--reviews-border);
  height: 187px;

  @media ${device.tablet} {
    padding: 32px;
  }

  @media ${device.desktop} {
    margin: 12px;
  }
`;

export const UserReviewsBlock = styled.div`
  margin-top: 40px;

  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const UserBox = styled.div`
  display: flex;
  gap: 18px;
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Letter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1.8px solid #3e85f3;

  color: #3e85f3;
  font-weight: 700;
  font-size: 21px;
  line-height: 1.28;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const UserName = styled.p`
  margin-bottom: 13px;
  color: var(--calendar-date-color);
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
`;

export const UserReviews = styled.p`
  margin-top: 24px;
  color: var(--title-text-main-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  @media ${device.tablet} {
    margin-left: 68px;
  }
`;

export const ButtonList = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: max-content;
  display: flex;
  gap: 25px;
  margin-top: 8px;
  background-color: inherit;

  @media ${device.tablet} {
    margin-top: 18px;
  }

  @media ${device.desktop} {
    margin-top: 32px;
  }
`;

export const ButtonArrow = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;

  :hover {
    cursor: pointer;
  }
`;

export const Svg = styled.svg`
  stroke: var(--title-text-main-color);
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    stroke: var(--accent);
  }
`;
