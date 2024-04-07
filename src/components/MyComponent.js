import { Helmet } from 'react-helmet';

const MyComponent = () => {
  return (
    <div>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="Explore a wide range of products at our Ecommerce Store. Shop for electronics, clothing, accessories, and more. Enjoy secure online shopping with fast delivery and great prices." />
      </Helmet>
    </div>
  );
};

export default MyComponent;
