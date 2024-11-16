import Review from './Review';

const UserReview = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-8 mt-8">Review</h1>
      <div className="flex justify-between gap-4 my-8 mt-8">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};
export default UserReview;
