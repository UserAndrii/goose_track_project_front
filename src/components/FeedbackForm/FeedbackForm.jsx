import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Rating } from 'react-simple-star-rating';

import {
  reviewsApi,
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useEditReviewMutation,
  useGetUserReviewQuery,
} from '../../redux/reviews/reviewsApi';
import {
  Btn,
  BtnWrapper,
  Form,
  IconContainer,
  RatingWrapper,
  StyledEditIcon,
  StyledEditIconDel,
  TextArea,
  TextAreaLabel,
} from './FeedbackForm.styled';

const FeedbackForm = ({ onClose }) => {
  const { data: userReviewData, refetch } = useGetUserReviewQuery();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const dispatch = useDispatch();

  const [createReview] = useCreateReviewMutation();
  const [editReview] = useEditReviewMutation();
  const [deleteReview] = useDeleteReviewMutation();

  useEffect(() => {
    if (userReviewData) {
      setRating(userReviewData.data.rating);
      setReview(userReviewData.data.review);
    } else {
      setRating(0);
      setReview('');
    }
  }, [userReviewData, refetch]);

  const handleEditReview = () => {
    setIsEditMode(true);
  };

  const handleDeleteReview = () => {
    setIsDeleteMode(true);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (isEditMode) {
      try {
        await editReview({ review, rating }).unwrap();
        setIsEditMode(false);
        onClose();
      } catch (error) {
        console.error('Error editing review:', error);
      }
    } else {
      try {
        await createReview({ review, rating }).unwrap();
        onClose();
      } catch (error) {
        console.error('Error creating review:', error);
      }
    }
  };

  const handleDelete = async () => {
    try {
      await deleteReview();
      setIsDeleteMode(false);
      dispatch(reviewsApi.util.resetApiState());
      onClose();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <RatingWrapper>
        <label>Rating</label>
        <Rating
          onClick={value => setRating(value)}
          fillColor="gold"
          readonly={!isEditMode && userReviewData}
          emptyColor="lightgrey"
          pointerEvents="none"
          size={32}
          initialValue={rating}
          onChange={value => setRating(value)}
          style={{ marginLeft: '-4px', marginTop: '2px' }}
        />
      </RatingWrapper>
      <TextAreaLabel>
        Review:
        {userReviewData && (
          <IconContainer>
            <StyledEditIcon onClick={handleEditReview} />
            <StyledEditIconDel onClick={handleDeleteReview} />
          </IconContainer>
        )}
      </TextAreaLabel>
      <TextArea
        value={review}
        placeholder="Enter Text"
        onChange={e => setReview(e.target.value)}
        disabled={!isEditMode && userReviewData}
      />
      {isDeleteMode && (
        <BtnWrapper>
          <Btn type="button" onClick={handleDelete}>
            Delete
          </Btn>
          <Btn type="button" onClick={onClose}>
            Cancel
          </Btn>
        </BtnWrapper>
      )}
      {isEditMode && (
        <BtnWrapper>
          <Btn type="submit" onClick={handleSubmit}>
            Edit
          </Btn>
          <Btn type="button" onClick={onClose}>
            Cancel
          </Btn>
        </BtnWrapper>
      )}
      {!userReviewData && (
        <BtnWrapper>
          <Btn type="submit">Save</Btn>
          <Btn type="button" onClick={onClose}>
            Cancel
          </Btn>
        </BtnWrapper>
      )}
    </Form>
  );
};

export default FeedbackForm;
