// ProductShowcase.jsx

import SunstarCola from "../assets/Compressed/Sunstar-Beverage-Cola-Flavour.webp";
import SunstarApple from "../assets/Compressed/Sunstar-Beverage-Green-Apple-Flavour.webp";
import SunstarMango from "../assets/Compressed/Sunstar-Beverage-Mango-Flavour.webp";
import SunstarOrange from "../assets/Compressed/Sunstar-Beverage-Orange-Flavour.webp";
import SunstarGrapes from "../assets/Compressed/Sunstar-Beverage-Grape-Flavour.webp";
import SunstarStrawberry from "../assets/Compressed/Sunstar-Beverage-Strawberry-Flavour.webp";
import SunstarCreamSoda from "../assets/Compressed/Sunstar-Beverage-Cream-Soda-Flavour.webp";
import { Button, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductShowcase = () => {
  let history = useNavigate();

  const handleLearnMoreClick = (flavour) => {
    history(`/product/${flavour}`);
  };
  const products = [
    {
      id: 1,
      name: "Orange Flavor",
      uri: "Orange",
      description:
        "Experience the citrusy burst of freshness with our Orange-flavored beverage.",
      image: SunstarOrange,
      price: 29.99,
      link: "https://example.com/orange-product",
    },
    {
      id: 2,
      name: "Mango Flavor",
      uri: "Mango",
      description:
        "Indulge in the tropical delight of our Mango-flavored beverage.",
      image: SunstarMango,
      price: 39.99,
      link: "https://example.com/mango-product",
    },
    {
      id: 3,
      name: "Strawberry Flavor",
      uri: "Strawberry",
      description:
        "Savor the sweet and juicy taste of our Strawberry-flavored beverage.",
      image: SunstarStrawberry,
      price: 34.99,
      link: "https://example.com/strawberry-product",
    },
    {
      id: 4,
      name: "Cola Flavor",
      uri: "Cola",
      description:
        "Enjoy the classic and refreshing taste of our Cola-flavored beverage.",
      image: SunstarCola,
      price: 32.99,
      link: "https://example.com/cola-product",
    },
    {
      id: 5,
      name: "Cream Soda Flavor",
      uri: "CreamSoda",
      description:
        "Indulge in the smooth and creamy goodness of our Cream Soda-flavored beverage.",
      image: SunstarCreamSoda,
      price: 36.99,
      link: "https://example.com/cream-soda-product",
    },
    {
      id: 6,
      name: "Green Apple Flavor",
      uri: "GreenApple",
      description:
        "Experience the crisp and tart flavor of our Green Apple-flavored beverage.",
      image: SunstarApple,
      price: 31.99,
      link: "https://example.com/green-apple-product",
    },
    {
      id: 7,
      name: "Grapes Flavor",
      uri: "Grapes",
      description:
        "Indulge in the sweet and rich taste of our Grapes-flavored beverage.",
      image: SunstarGrapes,
      price: 37.99,
      link: "https://example.com/grapes-product",
    },
  ];

  return (
    <div className="product-showcase">
      <h3 className="featured-products">Featured Products</h3>
      <Container >
       
        <div className="products">
        {products.map((product) => (
          <Col md={4} xs={12} lg={3} key={product.id}>
            <div className="product" >
            <img src={product.image} alt={product.name} loading="lazy" />
            <h4 style={{ textAlign: "center" }}>{product.name}</h4>
            {/* <p
              style={{
                textAlign: "left",
                opacity: 0.8,
                fontSize: "14px",
                paddingInline: "10px",
                paddingTop: "10px",
              }}
            >
              {product.description}
            </p> */}
            <div className="d-flex justify-content-between mt-2  px-3 py-2">
              <p className="pt-3">250 Ml</p>
              <p className="pt-3">Price: LKR 100.00</p>
            </div>
            <Button
              className="product-btn"
              onClick={() => handleLearnMoreClick(product.uri)}
            >
              Learn More
            </Button>
          </div>
          </Col>
        ))}
      </div>
       
      </Container>
    </div>
  );
};

export default ProductShowcase;
