import React, { Component } from 'react';

class Cake extends Component {
    // Initialize the state
    constructor(props){
        super(props);
        this.state = {
            cake: {}
        }
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getCake();
    }

    // Retrieves the list of items from the Express app
    getCake = () => {
        const { match: { params } } = this.props;

        console.log(params.id);
        fetch(`/api/user/${params.id}`)
            .then(res => res.json())
            .then(cake => {
                cake = cake.data;
                this.setState({cake});

            })
    }

    render() {
        const { cake } = this.state;

        return (<div>{cake.email}</div>);
    }
}

export default Cake;