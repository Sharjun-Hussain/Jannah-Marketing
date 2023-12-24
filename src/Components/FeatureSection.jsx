// FeatureSection.jsx



const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="feature-content">
        <h2 className="feature-title">Our Features</h2>
        <p className="feature-description">Explore the unique features of Sunstar Beverages</p>
        
        <div className="feature-item feature-orange">
          <h3 className="feature-subtitle">Wide Range of Flavors</h3>
          <p className="feature-text">Choose from our diverse selection of flavors, including Orange, Mango, Strawberry, Cola, Cream Soda, Green Apple, and Grapes.</p>
        </div>

        <div className="feature-item feature-mango">
          <h3 className="feature-subtitle">Premium Quality Ingredients</h3>
          <p className="feature-text">We use only the finest and freshest ingredients to ensure the highest quality in every sip.</p>
        </div>

        <div className="feature-item feature-strawberry">
          <h3 className="feature-subtitle">Refreshing and Natural</h3>
          <p className="feature-text">Experience the refreshing taste of natural fruit extracts, carefully crafted for a delightful beverage experience.</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
