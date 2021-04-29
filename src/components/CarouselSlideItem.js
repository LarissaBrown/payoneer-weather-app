import React from 'react'





const CarouselSlideItem = (props) => {
    const {item} = props
    console.log("iTEm", item)
    console.log(item.player.image)
    console.log(item.player.title)
    console.log(item.player.desc)

    return (
        <>
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.player.image.default}  alt={item.player.title} />
            </div>
            <div className="carousel-slide-item__body">
                <h4>{item.player.title.default}</h4>
                <p>{item.player.desc.default}</p>
            </div>
        </li>
        </>
    );
};
export default CarouselSlideItem