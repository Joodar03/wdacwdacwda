import React, {Component} from 'react';
import {Navbar, Container, Nav, Button} from "react-bootstrap";

class NavbarC extends Component {
    render() {
        return (
            <Navbar className="navbar navbar-expand-lg navbar-light bg-primary" variant="dark" fixed>
                <Container>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">ЖУН ПАЙПАК!</a>
                        <Button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                                aria-label="Toggle navigation">
                        </Button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Detail</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarC;