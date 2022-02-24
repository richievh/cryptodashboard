import axios from "axios";
import { useEffect, useState } from "react";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/news",
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const displayArticles = articles?.slice(0, 5);

  return (
    <div className="news-feed">
      <h3>Crypto News Feed</h3>
      {displayArticles?.map((article, index) => (
        <div key={index}>
          <a href={article.url}>
            <p> {article.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
