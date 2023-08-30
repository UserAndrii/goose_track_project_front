import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import {
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useEditReviewMutation,
  useGetUserReviewQuery,
} from '../../redux/reviews/reviewsApi';
import {
  Btn,
  BtnWrapper,
  Form,
  RatingWrapper,
  TextArea,
  TextAreaLabel,
} from './FeedbackForm.styled';

const FeedbackForm = ({ onClose }) => {
  const { data: userReviewData } = useGetUserReviewQuery();
  const [rating, setRating] = useState(userReviewData?.rating || '');
  const [review, setReview] = useState(userReviewData?.message || '');

  const [createReview] = useCreateReviewMutation();
  const [editReview] = useEditReviewMutation();
  const [deleteReview] = useDeleteReviewMutation();

  const handleSubmit = event => {
    event.preventDefault();
    if (userReviewData) {
      editReview({ review, rating })
        .unwrap()
        .then(() => {
          onClose();
        });
    } else {
      createReview({ review, rating })
        .unwrap()
        .then(() => {
          onClose();
        });
    }
  };

  const handleDelete = () => {
    deleteReview()
      .unwrap()
      .then(() => {
        onClose();
      });
  };

  useEffect(() => {
    if (userReviewData) {
      setRating(userReviewData.rating);
      setReview(userReviewData.message);
    }
  }, [userReviewData]);

  return (
    <Form onSubmit={handleSubmit}>
      <RatingWrapper>
        <label>Rating</label>
        <Rating
          onClick={value => setRating(value)}
          fillColor="gold"
          emptyColor="lightgrey"
          size={32}
          ratingValue={rating}
          style={{ marginLeft: '-4px', marginTop: '2px' }}
        />
      </RatingWrapper>
      <TextAreaLabel>
        Review:
        <TextArea
          value={review}
          placeholder="Enter Text"
          onChange={e => setReview(e.target.value)}
        />
      </TextAreaLabel>
      <BtnWrapper>
        <Btn type="submit">Submit</Btn>
        {userReviewData && (
          <Btn type="button" onClick={handleDelete}>
            Delete
          </Btn>
        )}
        <Btn type="button" onClick={onClose}>
          Cancel
        </Btn>
      </BtnWrapper>
    </Form>
  );
};

export default FeedbackForm;
