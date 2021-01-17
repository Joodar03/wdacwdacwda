import React, {Component} from 'react';
import NavbarC from "../Navbar/Navbar";
import Products from "../PRODUCTS/products";
import axios from "axios"
import {Container,Jumbotron} from "react-bootstrap";

class App extends Component {
    state = {
        products: {
            count: 0,
            results: []
        }
    }

    componentDidMount() {
        axios.get("https://ecommerce-7-api.itpark.edu.kg/api/products/?page_size=3").then((response) => {
            this.setState({products: response.data})
        })
    }


    render() {
        const state = this.state
        return (
            <div>
                <NavbarC/>,
                <Container>
                    <Jumbotron>
                        <Products products={state.products}/>
                    </Jumbotron>
                </Container>
            </div>
        );
    }
}

export default App;