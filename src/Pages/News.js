import { useEffect, useState } from "react";
import NavBar from "../Components/Nav";
import Footer from "../Components/Footer";

const API_KEY = process.env.REACT_APP_API_KEY;

function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/news", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched News:", data);
        setNews(data);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="bg-yellow">
      <NavBar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl text-deep font-bold mb-6">Latest News</h1>
        {news.length === 0 && <p className="text-gray-600">Loading news...</p>}
        {news.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-lg rounded-lg p-4 mb-6"
          >
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{article.title}</h2>
            <p className="text-gray-700 mt-2">{article.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default NewsPage;
