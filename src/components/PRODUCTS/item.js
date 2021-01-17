import React from 'react';
import {CardImg, Card, Button} from "react-bootstrap";

const Item = (item) => {
    console.log(item)
    return (
        <div className="col-md-4 mt-2">
            <Card>
                <CardImg src={item.images} className="card-img-top" />
                    <Card.Body>
                        <Card.Title className="card-title">{item.title}</Card.Title>
                        <Card.Text className="card-text">Some quick example text to build on the card title and make up
                            the bulk of the card's content.</Card.Text>
                    </Card.Body>
                    <Button className="btn btn-outline-danger">Detail</Button>
            </Card>
        </div>
);
};

export default Item;