import React,{useState,useEffect} from 'react'
import {Row , Col , Image , ListGroup, Card , Button , Form } from "react-bootstrap";
import Rating from '../Components/Rating';
import {useSelector , useDispatch} from "react-redux"
import {listProductDetails} from "../actions/productActions"
import Message from '../Components/Message';
import Loader from '../Components/Loader';

const ProductScreen = ({match , history}) => {
    const [qty,setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails)
    const dispatch = useDispatch()
    const {error , loading , product} = productDetails;

    const addToCartHandler = () =>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch , match])
    
    return (
        <div>
            {
    loading ? <Loader /> : error? <Message variant="dander">{error}</Message> :
            
            <Row>
                <Col md={6}>
                    <img src="" alt="" />
                <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price :</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status :</Col>
                                <Col>{product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                            <Form.Control as="select" value={qty} onChange={(e) =>{setQty(e.target.value)}}>
                                                {
                                                    [...Array(product.countInStock).keys()].map((x)=>{
                                                        return <option key={x+1} value={x+1}>{x+1}</option>
                                                    })
                                                }   
                                            </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn-block" type="button" onClick={addToCartHandler} disabled={product.countInStock === 0}>
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </Card>
                </Col>
            </Row>
        }
        </div>
    )
}

export default ProductScreen
