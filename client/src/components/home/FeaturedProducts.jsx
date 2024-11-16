import ProductCard from '../ProductCard';

const FeaturedProducts = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-8 mt-8">
        Featured product
      </h1>
      <div className="flex items-center justify-between gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
export default FeaturedProducts;
