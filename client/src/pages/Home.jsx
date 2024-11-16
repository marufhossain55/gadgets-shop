import Accordion from '../components/home/Accordion';
import Banner from '../components/home/Banner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import UserReview from '../components/home/UserReview';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <FeaturedProducts />
        <UserReview />
        <div className="mt-8 w-1/2 ">
          <h1 className="text-4xl text-center font-bold my-8">
            Frequently asked questions
          </h1>
          <Accordion />
        </div>
      </div>
    </div>
  );
};
export default Home;
