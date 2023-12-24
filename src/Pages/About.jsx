// AboutUs.jsx

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Header from "../Components/Header";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Sunstar | Jannah Marketing</title>
        <meta
          name="description"
          content="Learn more about Jannah Marketing, the creators of delightful and flavorful drinks. Discover our story, mission, and the team behind the magic."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Ershad" />
        <meta
          name="keywords"
          content="Sunstar Sun Star Jannah Marketing, About Us, Our Story, Mission, Team"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jannahmarketing.nl/about" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="About Us - Jannah Marketing" />
        <meta
          property="og:description"
          content="Learn more about Jannah Marketing, the creators of delightful and flavorful drinks. Discover our story, mission, and the team behind the magic."
        />
        <meta
          property="og:url"
          content="https://www.jannahmarketing.nl/about"
        />
        <meta
          property="og:image"
          content="https://drive.google.com/uc?id=19_ihJyNi-JG3Qs78AF4hF4VGI8dk6ax2"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jannahmarketing" />
        <meta name="twitter:title" content="About Us - Jannah Marketing" />
        <meta
          name="twitter:description"
          content="Learn more about Jannah Marketing, the creators of delightful and flavorful drinks. Discover our story, mission, and the team behind the magic."
        />
        <meta
          name="twitter:image"
          content="https://drive.google.com/uc?id=19_ihJyNi-JG3Qs78AF4hF4VGI8dk6ax2"
        />
      </Helmet>

      <Header />
      <div className="about-us" data-aos="fade-left">
        <h2>About Us</h2>
        <p className="about-details-p">
          Welcome to Sunstar Beverage, where innovation meets flavor in every
          sip. As the brainchild of Jannah Marketing, we take pride in
          redefining the beverage experience with our premium line of refreshing
          drinks.
          <br />
          <br />
          🌟 Our Vision: Elevating Refreshment Standards At Sunstar Beverage,
          our vision goes beyond crafting exceptional beverages – we aspire to
          elevate the standards of refreshment. We believe that each bottle
          holds the potential to spark joy, awaken the senses, and create
          moments of pure delight. Our commitment is to bring you a symphony of
          flavors that transcends the ordinary.
        </p>

        <div className="about-details">
          <div className="detail">
            <FaMapMarkerAlt color=" #ff8c00" />
            <p>56/C, Old Post Office Road, Sainthamaruthu-09</p>
          </div>
          <div className="detail">
            <FaPhone color=" #ff8c00" />
            <p>0779077134</p>
          </div>
          <div className="detail">
            <FaEnvelope color=" #ff8c00" />
            <p>info@jannahmarketing.nl</p>
          </div>
        </div>

        <div className="map-container">
          {/* Replace the src attribute with your Google Maps embed iframe */}
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6464790738482!2d81.83575851038209!3d7.393451312412519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae53fc3a98879f9%3A0x6bf31d71d287f9d8!2sJANNAH%20MARKETING%20PVT%20LTD!5e0!3m2!1sen!2slk!4v1701800230439!5m2!1sen!2slk"
            width="1000"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        

        <div className="team-section">
          <h3>Our Team</h3>
          <div className="team-member">
            <p>Mohamed Nakkas</p>
            <p>Co-Founder & CEO</p>
          </div>
          <div className="team-member">
            <p>Mohamed Ershad</p>
            <p>Co-Founder & CEO</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
