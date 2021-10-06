import React,{useState , useEffect} from 'react'
import {Row,Col} from "react-bootstrap";
// import Products from '../products';
import Product from '../Components/Product';
import {useDispatch,useSelector} from "react-redux";
import axios from "axios";
import {listProducts} from "../actions/productActions"
import Message from '../Components/Message';
import Loader from '../Components/Loader';

const Homescreen = () => {
    const [Products,setProducts] = useState([]);
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const {loading , error , products} = productList;

    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch])
    return (
        <>
            <h1>Latest Products</h1>
            {
                loading ? <Loader /> : error? <Message variant="dander">{error}</Message> :
            (<Row>
                {
                    products.map((product,i)=>{
                          return(
                            <Col sm={12} md={6} lg={4} xl={3} key={i}>
                            <Product product={product} />
                            </Col>
                          )
                    })
                }
            </Row>            
            )
            }
        </>
    )
}

export default Homescreen;
