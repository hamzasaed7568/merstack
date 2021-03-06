import React from 'react'
import propTypes from "prop-types";

const Rating = ({value , text,color}) => {
    // console.log(match);
    return (
        <div className="rating">
            <span style={{color}}>
                <i className={value >= 1 ? "fas fa-star": value >= 0.5 ? "fas fa-star-half-alt":"far fa-star"}></i>
            </span>
            <span style={{color}}>
                <i  className={value >= 2 ? "fas fa-star": value >= 1.5? "fas fa-star-half-alt":"far fa-star" }></i>
            </span>
            <span style={{color}}>
                <i className={value >= 3 ? "fas fa-star" : value >= 2.5 ? "fas fa-star-half-alt":"far fa-star"}></i>
            </span>
            <span style={{color}}>
                <i className={value >= 4 ? "fas fa-star" : value >= 3.5 ? "fas fa-star-half-alt":"far fa-star"}></i>
            </span>
            <span style={{color}}>
                <i className={value >= 5 ? "fas fa-star" :value >=4.5 ? "fas fa-star-half-alt":"far fa-star"}></i>
            </span>
            <span>{text && text}</span>
        </div>
    )
}

Rating.defaultProps = {
    color:"#f8e825"
}
// style={{color}}

Rating.propTypes= {
    value: propTypes.number.isRequired,
    text: propTypes.string.isRequired,
    color: propTypes.string
}

export default Rating
