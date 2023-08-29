import {
  RatingStar,
  ReviewsBoxStyle,
  UserBox,
  UserAvatar,
  UserName,
  UserReviews,
  Letter,
} from './ReviewsSlider.styled';



export default function ReviewsBox({
  avatarUrl,
  name,
  rating = 0,
  comment,
})

{
  const firstName = name.split(' ')[0];
  const firstLetter = firstName[0]?.toUpperCase();

  return (
    <ReviewsBoxStyle>
      <UserBox>
        {avatarUrl ? (
          <UserAvatar src={avatarUrl} alt="User avatar" />
        ) : (
          <Letter>{firstLetter}</Letter>
        )}
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
