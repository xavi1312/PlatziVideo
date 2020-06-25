import React from "react";
// Utilities
import { connect } from "react-redux";
import { setFavorite, deleteFavorite } from "../actions";
import PropTypes from "prop-types";
// Assets
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove-icon.png";
import "../assets/styles/components/CarouselItem.scss";

const CarouselItem = props => {
  const { id, cover, title, year, contentRating, duration, isInMyList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      cover,
      title,
      year,
      contentRating,
      duration,
      id,
    });
  };
  const handleDeleteFavorite = itemId => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
          {isInMyList ? (
            <img
              className="carousel-item__details--img"
              src={removeIcon}
              alt="Remove Icon"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  id: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
