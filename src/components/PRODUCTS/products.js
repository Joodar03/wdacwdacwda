import React, {Component} from 'react';
import Item from "./item";

class Products extends Component {
    render() {
        const {count,results} = this.props.products
        return (
            <div className="row">
                {results.map((item)=><Item key={item.id} item={item}/>)}
            </div>
        );
    }
}

export default Products;