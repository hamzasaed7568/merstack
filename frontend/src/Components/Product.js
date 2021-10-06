import React , {useEffect} from 'react'
import {Card} from "react-bootstrap"
import Rating from './Rating';
import {Link} from "react-router-dom";

const Product = ({product}) => {

    return(
        <Card className="my-3 p-3 rounded">
            <Link to={`/api/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" height="200px"  />
            </Link>
            <Card.Body>
                <Link to={`/api/product/${product._id}`}>
                    <Card.Title as="div"><strong>{product.name}</strong></Card.Title>
                </Link>
                <Card.Text as="div">
                    <div className="my-3">
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>
                <Card.Text as="h3">{product.price}</Card.Text>
                <Card.Text as="div"> <Rating value={product.rating} text={`${product.numReviews} reviews`} /></Card.Text>
            </Card.Body>
        </Card>       
    )
}


export default Product;
