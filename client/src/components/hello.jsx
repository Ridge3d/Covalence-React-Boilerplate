import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloWorld extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return <h1>Welcome To My Personal Blog!</h1>;
    }
}

export default HelloWorld;