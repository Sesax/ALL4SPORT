import React from "react";
import axios from 'axios';
import { render } from "react-dom";

export default class Batiments extends React.Component {
    state = {
        batiments: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/batiment').then(res => {
            let batiments = res.data
            this.setState({batiments})
        })
    }

    render(){
        return (
            <div>{this.state.batiments.map(batiment => <h1>{batiment.ba_adresse}</h1>)}</div>
        )
    }
}