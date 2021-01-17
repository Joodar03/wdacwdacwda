import React, {Component} from 'react';
import NavbarC from "../Navbar/Navbar";
import Products from "../PRODUCTS/products";
import axios from "axios"
import {Container, Jumbotron} from "react-bootstrap";
import {withRouter, Route, Switch} from "react-router-dom";
import Detail from "../PRODUCTS/detail";


class App extends Component {
    state = {
        products: {
            count: 0,
            results: []
        },
    }

    componentDidMount() {
        this.getProduct()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.location.search !== prevProps.location.search) {
            this.getProduct()
        }
    }

    getProduct = () => {
        const search = this.props.location.search
        axios.get("https://ecommerce-7-api.itpark.edu.kg/api/products/" + search).then((response) => {
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
                        <Route exact path={"/"}>
                            <Products products={state.products}/>
                        </Route>
                        <Route exact path={"/:id"}>
                            <Detail/>
                        </Route>
                    </Jumbotron>
                </Container>
            </div>
        );
    }
}

export default withRouter(App);