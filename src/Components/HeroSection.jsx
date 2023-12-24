// HeroSection.jsx

// import Slider from 'react-slick';
import { Carousel, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SunstarFlavours from "../assets/Sunstar-Beverages-Jannah-Marketing-Cover.png";
// import SunstarFlavours2 from "../assets/Sunstar-Beverages-Jannah-Marketing-Cover-Apple.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section">
     
        <Carousel>
          {[1,2,3,4].map((item) =>(
            <Carousel.Item key={item}>
            <img
              className="d-block h-100 "
              src={SunstarFlavours}
              alt="Sunstar Flavours "
              style={{ width: "100vw" }}
            />
          </Carousel.Item>
          ))}
        {/* <Carousel.Item>
          <img
            className="d-block h-100 "
            src={SunstarFlavours}
            alt="SunstarFlavours "
            style={{ width: "100vw" }}
          />
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <img
            className="d-block h-100 "
            src={SunstarFlavours2}
            alt="SunstarFlavours "
            style={{ width: "100vw" }}
          />
        </Carousel.Item> */}
        {/* Add more Carousel.Items as needed */}
      </Carousel>
     
      <Container fluid className=" pb-5">
        <Row>
          <div className=" mt-5">
            <div className=" d-flex  justify-content-center  flex-column ">
              <h1 className="  text-uppercase ">Sunstar Beverage</h1>
              <p className="mt-1">
                Discover the refreshing taste of our premium beverages
              </p>
              <button className="hero-btn">
                {" "}
                <Link
                  to="https://api.whatsapp.com/send?phone=0094779077134"
                  className="hero-button"
                >
                  Explore Flavors
                </Link>
              </button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
