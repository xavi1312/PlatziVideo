import React from "react";
// Utilities
import "../assets/styles/App.scss";
import useInitialState from "../hooks/useInitialState";
// Components
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

const Home = () => {
  const apiURL = "http://localhost:3000/initalState";
  const videos = useInitialState(apiURL);

  return (
    <>
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
            videos.trends.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {videos.length === undefined &&
            videos.originals.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;
