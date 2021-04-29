import React from 'react'
import CarouselSlideItem from './CarouselSlideItem'


const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Date and Temp',                                  
            desc: 'Sunny.',
            image: require('./sunny_Munich.jpg'),
        },
    },
    {
        player: {
            title: 'Date and Temp',  
            desc: "Cloudy.",
            image: require('./cloudy_Munich.jpg'),
        },
    },
    {
        player: {
            title:  'Date and Temp',  
            desc: 'Chance of Rain.',
            image: require('./chanceOfRain_Munich.jpg'),
        },
    },
    {
        player: {
            title: 'Date and Temp',                                              
            desc: 'Windy.',
            image: require('./windy_Munich.jpg'),
        },
    },
    {
        player: {
            title: 'Date and Temp',  
            desc: 'Snow.',
            image: require('./snow_Munich.jpg'),
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (pos, i) => {
     let idx = i
    console.log("idxPLAYER", _items[idx])
    const item = {
        styles: {
            transform: `translateX(${pos * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (pos) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 1};
            break;
    }

    return item;
};



const keys = Array.from(Array(_items.length).keys());

export const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
                <button className="carousel__btn carousel__btn--prev"style={{left: '30%'}} onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <button className="carousel__btn carousel__btn--next" style={{right: '30%'}}onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
            <div className="carousel__inner">

                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                       
                        {items.map((pos, i) => (
                          
                            <CarouselSlideItem
                                key={i}
                                item={createItem(pos, i, activeIdx)}
                                idx={i}
                            />
                        ))}
                    </ul>
                </div>

                <div className="carousel__dots">
                    {items.slice(0, items.length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

