import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";

import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import Footer from "../components/Footer";

import "../assets/styles/App.scss";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/initalState")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      })
      .catch((err) => console.log("Error fetching videos: " + err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />
      {videos.length === undefined && videos.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {videos.length === undefined &&
            videos.trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
