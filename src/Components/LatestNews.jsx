

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Exciting New Flavor Launch!',
      content: 'Introducing our latest flavor that will delight your taste buds. Don\'t miss out!',
      date: '2023-12-04',
    },
    {
      id: 2,
      title: 'Company Milestone Achieved',
      content: 'We are celebrating a significant milestone in our journey. Thank you for your support!',
      date: '2023-12-03',
    },
    // Add more news items as needed
  ];

  return (
    <div className="latest-news-section">
      <h3>Latest News</h3>
      <div className="news-items">
        {newsItems.map((news) => (
          <div className="news-item" key={news.id}>
            <h4>{news.title}</h4>
            <p>{news.content}</p>
            <p className="date">Published on: {new Date(news.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
