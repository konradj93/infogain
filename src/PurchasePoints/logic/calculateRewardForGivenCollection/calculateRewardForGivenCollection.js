/* eslint-disable no-param-reassign */
import calculateRewardPoints from "../calculateRewardPoints/calculateRewardPoints";

const calculateRewardForGivenCollection = (collection) =>
  collection.reduce((acc, el) => {
    acc += el.transactions.reduce((points, purchase) => {
      points += calculateRewardPoints(purchase.amount);
      return points;
    }, 0);
    return acc;
  }, 0);

export default calculateRewardForGivenCollection;
