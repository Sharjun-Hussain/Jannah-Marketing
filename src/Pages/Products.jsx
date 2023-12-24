// ProductDetail.jsx

import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import SunstarCola from '../assets/Compressed/Sunstar-Beverage-Cola-Flavour.webp'
import SunstarApple from '../assets/Compressed/Sunstar-Beverage-Green-Apple-Flavour.webp'
import SunstarMango from '../assets/Compressed/Sunstar-Beverage-Mango-Flavour.webp'
import SunstarOrange from '../assets/Compressed/Sunstar-Beverage-Orange-Flavour.webp'
import SunstarGrapes from '../assets/Compressed/Sunstar-Beverage-Grape-Flavour.webp'
import SunstarStrawberry from '../assets/Compressed/Sunstar-Beverage-Strawberry-Flavour.webp'
import SunstarCreamSoda from '../assets/Compressed/Sunstar-Beverage-Cream-Soda-Flavour.webp'

const ProductDetail = () => {
  const { flavour } = useParams();

  const products = {
    Orange: {
      id: 1,
      name: "Orange Flavor",
      flavor: "Orange",
      description:
        "Experience the citrusy burst of freshness with our Orange-flavored beverage.",
      image: SunstarOrange,
      price: 29.99,
      link: "https://example.com/orange-product",
    },
    Mango: {
      id: 2,
      name: "Mango Flavor",
      flavor: "Mango",
      description:
        "Indulge in the tropical delight of our Mango-flavored beverage.",
      image: SunstarMango,
      price: 39.99,
      link: "https://example.com/mango-product",
    },
    Strawberry: {
      id: 3,
      name: "Strawberry Flavor",
      flavor: "Strawberry",
      description:
        "Savor the sweet and juicy taste of our Strawberry-flavored beverage.",
      image: SunstarStrawberry,
      price: 100,
      link: "https://example.com/strawberry-product",
    },
    Cola: {
      id: 4,
      name: "Cola Flavor",
      flavor: "Cola",
      description:
        "Enjoy the classic and refreshing taste of our Cola-flavored beverage.",
      image: SunstarCola,
      price: 32.99,
      link: "https://example.com/cola-product",
    },
    CreamSoda: {
      id: 5,
      name: "Cream Soda Flavor",
      flavor: "Cream-Soda",
      description:
        "Indulge in the smooth and creamy goodness of our Cream Soda-flavored beverage.",
      image: SunstarCreamSoda,
      price: 36.99,
      link: "https://example.com/cream-soda-product",
    },
    GreenApple: {
      id: 6,
      name: "Green Apple Flavor",
      flavor: "Green-Apple",
      description:
        "Experience the crisp and tart flavor of our Green Apple-flavored beverage.",
      image: SunstarApple,
      price: 31.99,
      link: "https://example.com/green-apple-product",
    },
    Grapes: {
      id: 7,
      name: "Grapes Flavor",
      flavor: "Grapes",
      description:
        "Indulge in the sweet and rich taste of our Grapes-flavored beverage.",
      image: SunstarGrapes,
      price: 37.99,
      link: "https://example.com/grapes-product",
    },
  };
  const selectedProduct = products[flavour];
  if (!selectedProduct) {
    return <div className="text-center">Product not found</div>;
  }
  console.log(selectedProduct);

  return (
    <div className="product-detail-container">
      <Helmet>
        <title>{flavour} - Sunstar | Jannah Marketing</title>
        <meta
          name="description"
          content="Explore the details of our exquisite product, including its flavors, ingredients, and more. Order now for a delightful experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Ershad" />
        <meta
          name="keywords"
          content="Jannah Marketing, Product Name, Flavors, Ingredients, Order Now"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.jannahmarketing.nl/product/product-name"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Product Name - Jannah Marketing" />
        <meta
          property="og:description"
          content="Explore the details of our exquisite product, including its flavors, ingredients, and more. Order now for a delightful experience."
        />
        <meta
          property="og:url"
          content="https://www.jannahmarketing.nl/product/product-name"
        />
        <meta property="og:image" content="URL to your product image" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jannahmarketing" />
        <meta name="twitter:title" content="Product Name - Jannah Marketing" />
        <meta
          name="twitter:description"
          content="Explore the details of our exquisite product, including its flavors, ingredients, and more. Order now for a delightful experience."
        />
        <meta name="twitter:image" content="URL to your product image" />
      </Helmet>

      <div className="product-detail-container">
        <div className="product-detail align-items-center ">
          <div className="product-image-container">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="product-image"
            />
          </div>
          <div className="product-info">
            <h1 className="product-name">{selectedProduct.name}</h1>
            <p className="product-description">{selectedProduct.description}</p>

           
            <Link to="/" className="back-button">
              Back to Product Showcase
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
