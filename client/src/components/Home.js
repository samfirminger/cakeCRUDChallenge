import React, {Component} from 'react';
import styled from "styled-components";
import CakeList from "./CakeList";
import {Link} from "react-router-dom";
import cake from "../images/cake.png";
import ErrorMessage from "./ErrorMessage";

const CakeIcon = styled.img`
    height: 60px;
    width: 60px;
`;

const HomeWrapper = styled.div`
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
`;

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cakes: [],
            error: false
        }
    }

    componentDidMount() {
        this.getCakes();
    }

    getCakes = () => {
        fetch('/api/cakes')
            .then(response => {
                if (response.ok) {
                    return response.json().then(cakes => {
                        cakes = cakes.data;
                        this.setState({cakes})
                    }).catch(error => this.setState({error: true}));
                } else {
                    this.setState({error: true})
                }
            }).catch(error => this.setState({error: true}));
    };

    render() {
        const {cakes} = this.state;

        return (
            <div className="App">
                <HomeWrapper>
                    <CakeIcon src={cake}/>
                    <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1>The Cake Database</h1></Link>

                    {cakes.length && !this.state.error ? (<CakeList cakes={cakes}/>) : (
                        <ErrorMessage error={true} message={'Could not fetch cakes'}/>
                    )
                    }
                </HomeWrapper>
            </div>
        );
    }
}

export default Home;