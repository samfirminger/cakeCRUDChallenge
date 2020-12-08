import React, {Component} from 'react';
import styled from "styled-components";
import CakeList from "./CakeList";
import {Link} from "react-router-dom";

const HomeWrapper = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
`;

class Home extends Component {
    // Initialize the state
    constructor(props) {
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
        fetch('/api/cakes')
            .then(res => res.json())
            .then(cakes => {
                cakes = cakes.data;
                this.setState({cakes})
            })
    }

    render() {
        const {cakes} = this.state;

        return (
            <div className="App">
                <HomeWrapper>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}><h1>The Cake Database</h1></Link>

                {cakes.length ? (
                    <CakeList cakes={cakes}/>
                ) : (
                    <div>
                        <h2>No Cakes Found</h2>
                    </div>
                )
                }
                </HomeWrapper>
            </div>
        );
    }
}

export default Home;