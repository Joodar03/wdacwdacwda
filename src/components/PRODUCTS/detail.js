import React, {Component} from 'react';
import axios from "axios";
import {withRouter} from "react-router-dom";

class Detail extends Component {
    state = {
        data: {},
        loading: true
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get("https://ecommerce-7-api.itpark.edu.kg/api/products/"+id+"/").then((response) => {
            this.setState({data: response.data,loading:false})
        })
    }

    render() {
        const {data,loading} = this.state
        if (loading) {
            return <p>Loading</p>
        }

        return (
            <div>
                <h1>{data.title}</h1>
                <img src={data.images[0].original} alt={data.title}/>
            </div>
        );
    }
}

export default withRouter(Detail);