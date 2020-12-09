import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import CakeGrid from "./CakeGrid";
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

const Home = () => {

    const [cakes, setCakes] = useState([]);
    const [hasFetched, setHasFetched] = useState(false);

    useEffect(() => {
        fetch('/api/cakes')
            .then(response => {
                if (response.ok) {
                    return response.json().then(cakes => {
                        cakes = cakes.data;
                        setCakes(cakes);
                        setHasFetched(true);
                    })
                } else {
                    this.setState({error: true})
                }
            }).catch(error => console.log(error));
    }, []);


    return (
        <div className="App">
            <HomeWrapper>
                <CakeIcon src={cake}/>
                <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1>The Cake Database</h1></Link>

                {hasFetched && cakes.length ? (<CakeGrid cakes={cakes}/>) : (
                    <ErrorMessage error={true} message={'Could not fetch cakes'}/>)}
            </HomeWrapper>
        </div>
    );
};


export default Home;