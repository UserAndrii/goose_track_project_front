import { reviews, tasks, users } from './data';

const randomId = Math.floor(Math.random() * users.length);
export const selectUser = () => users[randomId];

export const selectTasksByUser = () =>
  tasks.filter(task => task.owner === randomId + 1);

export const selectReviews = () => reviews;

export const selectReviewByUser = () =>
  reviews.find(review => review.owner === randomId + 1);
