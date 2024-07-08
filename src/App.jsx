import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=8a6a7bdf675446d59d17519bdaa678cc"
      )
      .then((response) => {
        setData(response.data.articles);
      })
      .catch((error) => {
        console.log("Fetching Error...", error);
      });
  };
  return (
    <>
      <div className="container my-3">
        <button className="btn btn-primary" onClick={getNews}>
          Fetch News
        </button>
      </div>

      <div className="container">
        <div className="row">
          {data.map((value, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card" style={{ width: "18rem;" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
