import React, {Component} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {device} from "./device";
import {useHistory} from "react-router";

const CakePageWrapper = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;

`;

const CakeWrapper = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;

`;

const CakeImage = styled.img`
    @media ${device.mobileS} {
        width: 250px;
        height: 250px;
    }
    
    @media ${device.laptop} {
        width: 400px;
        height: 400px;
    }

    object-fit: cover;
    border-radius: 8px;
    vertical-align:middle;
    margin-bottom: 30px;
`;

const CakeDetail = styled.p`
    display: block;
    width: 100%;
    font-size: 25px;

`


class Cake extends Component {
    // Initialize the state
    constructor(props) {
        super(props);
        this.deleteCake = this.deleteCake.bind(this);
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
        const {match: {params}} = this.props;

        fetch(`/api/cake/${params.id}`)
            .then(res => res.json())
            .then(cake => {
                cake = cake.data;
                this.setState({cake});
            })
    };

    deleteCake = () => {
        const {match: {params}} = this.props;
        fetch(`/api/cake/${params.id}`, {
            method: 'DELETE'
        }).then(response => {response.json();
        });
    }

    render() {
        const {cake} = this.state;

        return (<CakePageWrapper>
            <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1>Home</h1></Link>
            <CakeWrapper>
                <CakeImage src={cake.imageUrl}/>
                <CakeDetail>Name: {cake.name}</CakeDetail>
                <CakeDetail>Comment: {cake.comment}</CakeDetail>
                <CakeDetail>Yum Factor: {cake.yumFactor}</CakeDetail>
                <button onClick={this.deleteCake}>Delete Cake</button>
            </CakeWrapper>
        </CakePageWrapper>);
    }
}

export default Cake;