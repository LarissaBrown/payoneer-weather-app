import React, { useContext, useEffect } from "react";
import CarouselSlideItem from "./CarouselSlideItem";
import { ContextStore } from "../ContextStore";

export const Carousel = () => {
  const {
    _carouselItems,
    setIsHidden,
    getPlayers,
    weatherData,
    weatherFive,
    fiveDayWeatherSet,
  } = useContext(ContextStore);
  const slideWidth = 30;

  useEffect(() => {
    getPlayers(weatherData);

    fiveDayWeatherSet();

    setIsHidden(false);
    console.log("_carouselItems", _carouselItems);
    return weatherFive && _carouselItems;
  });

  console.log("carouselItems", _carouselItems);

  const length = _carouselItems.length;
  _carouselItems.push(..._carouselItems);

  const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const createCarouselItem = (pos, i) => {
    let idx = i;
    console.log("idxPLAYER", _carouselItems[idx]);
    const carouselItem = {
      styles: {
        transform: `translateX(${pos * slideWidth}rem)`,
      },
      player: _carouselItems[idx].player,
    };

    switch (pos) {
      case length - 1:
      case length + 1:
        carouselItem.styles = {
          ...carouselItem.styles,
          filter: "grayscale(1)",
        };
        break;
      case length:
        break;
      default:
        carouselItem.styles = { ...carouselItem.styles, opacity: 1 };
        break;
    }

    return carouselItem;
  };

  const keys = Array.from(Array(_carouselItems.length).keys());

  const [carouselItems, setcarouselItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = carouselItems.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setcarouselItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setcarouselItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (i, carouselItems) => {
    if (i === activeIdx - 1) {
      return;
    }
    if (i === carouselItems.length - 1) {
      return;
    } else if (i < activeIdx) prevClick(activeIdx - i);
    else if (i > activeIdx) nextClick(i - activeIdx);
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (carouselItems[0] % length)) % length) // prettier-ignore
  }, [carouselItems, length]);

  console.log("activeIdx", activeIdx);
  console.log("carouselItems[0]", carouselItems[0]);
  console.log("length-1", length - 1);

  return (
    <div className="carousel__wrap">
      <button
        className={
          activeIdx !== carouselItems[0]
            ? "carousel__btn carousel__btn--prev"
            : "hidden-arrow--next"
        }
        style={{ left: "30%" }}
        onClick={() => prevClick()}
      >
        <i className="carousel__btn-arrow carousel__btn-arrow--left" />
      </button>
      <button
        className={
          activeIdx !== length - 1
            ? "carousel__btn carousel__btn--next"
            : "hidden-arrow--next"
        }
        style={{ right: "30%" }}
        onClick={() => nextClick()}
      >
        <i className="carousel__btn-arrow carousel__btn-arrow--right" />
      </button>
      <div className="carousel__inner">
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {carouselItems.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                item={createCarouselItem(pos, i, activeIdx)}
                idx={i}
              />
            ))}
          </ul>
        </div>

        <div className="carousel__dots">
          {carouselItems.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? "dot active" : "dot"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
