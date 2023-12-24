


import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
<>
    <Helmet>
        <title>404 Not Found - Sunstar | Jannah Marketing</title>
        <meta name="description" content="Oops! It seems you've ventured into uncharted territory. Return to the main page of Jannah Marketing for a refreshing experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Ershad" />
        <meta name="keywords" content=" sunstar Sun star Jannah Marketing, 404 Not Found, Lost, Uncharted Territory" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.jannahmarketing.nl/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="404 Not Found - Sunstar | Jannah Marketing" />
        <meta property="og:description" content="Oops! It seems you've ventured into uncharted territory. Return to the main page of Jannah Marketing for a refreshing experience." />
        <meta property="og:url" content="https://www.jannahmarketing.nl/" />
        <meta property="og:image" content="https://drive.google.com/uc?id=19_ihJyNi-JG3Qs78AF4hF4VGI8dk6ax2" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jannahmarketing" />
        <meta name="twitter:title" content="404 Not Found - Sunstar | Jannah Marketing" />
        <meta name="twitter:description" content="Oops! It seems you've ventured into uncharted territory. Return to the main page of Jannah Marketing for a refreshing experience." />
        <meta name="twitter:image" content="https://drive.google.com/uc?id=19_ihJyNi-JG3Qs78AF4hF4VGI8dk6ax2" />
      </Helmet>
    <div className="not-found-container">
      <h1>404 Not Found</h1>
      <p className='text-light'>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
    </>
  );
};

export default NotFound;
