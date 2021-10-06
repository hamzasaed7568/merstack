import './App.css';
import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import  './bootstrap.min.css'
import {Container} from "react-bootstrap"
import Homescreen from './HomeScreen/Homescreen';
import {BrowserRouter as Router, Route} from "react-router-dom"
import ProductScreen from './HomeScreen/ProductScreen';
import CartScreen from './HomeScreen/CartScreen';
const App = () => {
  return (
    <div>
      <Router>
      <Header></Header>
      <main className="py-3">

        <Container>
        <h1>Welcome to shopping Hub</h1>
        <Route path="/" exact component={Homescreen} />
        <Route path="/api/product/:id" component={ProductScreen} />
        <Route  path="/cart/:id" component={CartScreen} />
        </Container>

      </main>
      <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
