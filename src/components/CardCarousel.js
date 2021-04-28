import React from 'react'
import './App.scss';



const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Date and Temp',                                  
            desc: 'Sunny.',
            image: 'https://images.unsplash.com/photo-1586163099117-33542fe96a69?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHxzdW5ueSUyMG11bmljaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
    },
    {
        player: {
            title: 'Date and Temp',  
            desc: "Cloudy.",
            image: 'https://images.unsplash.com/photo-1525776759712-7b066ce45de0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxjbG91ZHklMjBtdW5pY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
    },
    {
        player: {
            title:  'Date and Temp',  
            desc: 'Chance of Rain.',
            image: 'https://images.unsplash.com/photo-1447584402565-2a5b35a7ea8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGNoYW5jZSUyMG9mJTIwcmFpbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
    },
    {
        player: {
            title: 'Date and Temp',                                              
            desc: 'Windy.',
            image: 'https://images.unsplash.com/photo-1531923690882-840d0dad3f24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY5fHx3aW5keXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
    },
    {
        player: {
            title: 'Date and Temp',  
            desc: 'Snow.',
            image: 'https://images.unsplash.com/photo-1578525254586-74279addf1ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.player.image} alt={item.player.title}/>
            </div>
            <div className="carousel-slide-item__body">
                <h4>{item.player.title}</h4> 
                <p>{item.player.desc}</p>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

export default function CardCarousel(){
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
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
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
