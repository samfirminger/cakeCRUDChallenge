import React, {Component} from 'react';
import styled from "styled-components";
import CakeList from "./CakeList";
import NewCake from "./NewCake";
import {Link} from "react-router-dom";

const HomeWrapper = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
`;

const NewCakeButton = styled.button`
    margin-top: 50px;
    background: rgba(255,255,255,.6);
    padding: 2vh;
    border: none;
    cursor: pointer;
    border-radius: 4px 4px;
    width: 200px;
    font-size: 20px;
    
    &:hover {
        background: rgba(215,215,215,.6);
    }
`;

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cakes: [],
            isCreating: false
        }
    }

    componentDidMount() {
        this.getCakes();
    }

    getCakes = () => {
        fetch('/api/cakes')
            .then(res => res.json())
            .then(cakes => {
                cakes = cakes.data;
                this.setState({cakes})
            })
    };

    openNewCakeForm = () => {
        this.setState({isCreating: true});
    };

    render() {
        const {cakes, isCreating} = this.state;

        return (
            <div className="App">
                <HomeWrapper>
                    <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1>The Cake Database</h1></Link>
                    {isCreating ? <NewCake/> : <NewCakeButton onClick={this.openNewCakeForm}>Add New Cake</NewCakeButton>}

                    {cakes.length ? (<CakeList cakes={cakes}/>) : (
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