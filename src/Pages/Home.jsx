
import FeatureSection from '../Components/FeatureSection'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import LatestNews from '../Components/LatestNews'
import ProductShowcase from '../Components/ProductShowcase'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
   <>

<Helmet>
        <title>Sunstar Beverage | Jannah Marketing  - Refreshing Beverages for Every Taste</title>
        <meta name="description" content="Explore the delightful world of Sunstar Beverage, offering a variety of refreshing drinks in flavors like Orange, Mango, Strawberry, Cola, Cream Soda, Green Apple, and Grapes." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content=" Mohamed Ershad" />
        <meta name="keywords" content="Sunstar Beverage, drinks, flavors, Orange, Mango, Strawberry, Cola, Cream Soda, Green Apple, Grapes jannah Marketing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jannahmarketing.nl/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Sunstar Beverage | Jannah Marketing  - Refreshing Beverages for Every Taste" />
        <meta property="og:description" content="Explore the delightful world of Sunstar Beverage, offering a variety of refreshing drinks in flavors like Orange, Mango, Strawberry, Cola, Cream Soda, Green Apple, and Grapes." />
        <meta property="og:url" content="https://www.jannahmarketing.nl/" />
        <meta property="og:image" content="https://drive.google.com/uc?id=19_ihJyNi-JG3Qs78AF4hF4VGI8dk6ax2" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Sunstar" />
        <meta name="twitter:title" content="Sunstar Beverage - Refreshing Beverages for Every Taste" />
        <meta name="twitter:description" content="Explore the delightful world of Sunstar Beverage, offering a variety of refreshing drinks in flavors like Orange, Mango, Strawberry, Cola, Cream Soda, Green Apple, and Grapes." />
        <meta name="twitter:image" content="https://drive.google.com/uc?id=19_ihJyNi-JG3Qs78AF4hF4VGI8dk6ax2" />
      </Helmet>
 <Header/>
 <HeroSection/>
 <FeatureSection/>
 <ProductShowcase/>
 <LatestNews/>
 <Footer/>
   </>
  )
}

export default Home