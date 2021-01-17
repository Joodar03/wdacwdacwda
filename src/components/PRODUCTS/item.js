import React from 'react';
import {CardImg, Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-4 mt-2">
            <Card>
                <CardImg src={item.images[0].original} className="card-img-top" />
                    <Card.Body>
                        <Card.Title className="card-title">{item.title}</Card.Title>
                        <Card.Text className="card-text">Some quick example text to build on the card title and make up
                            the bulk of the card's content.</Card.Text>
                    </Card.Body>
                    <Link to={"/"+item.id+"/"} className="btn btn-outline-danger">Detail</Link>
            </Card>
        </div>
);
};

export default Item;