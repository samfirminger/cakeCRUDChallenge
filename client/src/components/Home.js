import React, {Component} from 'react';
import styled from "styled-components";
import CakeList from "./CakeList";
import {Link} from "react-router-dom";
import cake from "../images/cake.png";

const CakeIcon = styled.img`
    height: 60px;
    width: 60px;
`

const HomeWrapper = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
`;

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cakes: []
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

    render() {
        const {cakes} = this.state;

        return (
            <div className="App">
                <HomeWrapper>
                    <CakeIcon src={cake}/>
                    <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1>The Cake Database</h1></Link>

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