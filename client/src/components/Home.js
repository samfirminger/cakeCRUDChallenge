import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    // Initialize the state
    constructor(props){
        super(props);
        this.state = {
            cakes: []
        }
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getCakes();
    }

    // Retrieves the list of items from the Express app
    getCakes = () => {
        fetch('/api/users')
            .then(res => res.json())
            .then(cakes => {
                cakes = cakes.data;
                console.log(cakes);
                this.setState({ cakes })
            })
    }

    render() {
        const { cakes } = this.state;

        return (
            <div className="App">
                <h1>List of Cakes</h1>
                {/* Check to see if any items are found*/}
                {cakes.length ? (
                    <div>
                        {/* Render the list of items */}
                        {cakes.map((item) => {
                            return(
                                <Link to={`/user/${item.id}`} key={item.id}>
                                    <div>
                                        {item.id}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <h2>No List Items Found</h2>
                    </div>
                )
                }
            </div>
        );
    }
}

export default Home;