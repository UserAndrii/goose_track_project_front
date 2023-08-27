import {
  RatingStar,
  ReviewsBoxStyle,
  UserBox,
  UserAvatar,
  UserName,
  UserReviews,
} from './ReviewsSlider.styled';

export default function ReviewsBox({
  avatarUrl = 'https://i.pinimg.com/originals/1e/2a/3c/1e2a3c967414574c5c728715cba165d5.jpg',
  name,
  rating = 0,
  comment,
}) {
  return (
    <ReviewsBoxStyle>
      <UserBox>
        <UserAvatar src={avatarUrl} alt="User avatar" />
        <div>
          <UserName>{name}</UserName>
          <RatingStar
            initialValue={rating}
            readonly={true}
            size={14}
            fillColor={'#FFAC33'}
            emptyColor={'#CEC9C1'}
            SVGstorkeWidth={2}
          />
        </div>
      </UserBox>
      <UserReviews>{comment}</UserReviews>
    </ReviewsBoxStyle>
  );
}
