import { useSelector } from 'react-redux';

import {
  selectReviewByUser,
  selectReviews,
  selectTasksByUser,
  selectUser,
} from './selectors';

export const Component = () => {
  const user = useSelector(selectUser);
  const tasks = useSelector(selectTasksByUser);
  const reviews = useSelector(selectReviews);
  const reviewUser = useSelector(selectReviewByUser);

  console.log('user :>> ', user);
  console.log('tasks :>> ', tasks);
  console.log('reviewUser :>> ', reviewUser);
  console.log('reviews :>> ', reviews);

  return <></>;
};
