import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {device} from "./device";
import {useHistory, useParams} from "react-router";

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

`;

const DeleteCake = styled.button`
    margin-top: 20px;
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


const Cake = () => {

    const [cake, setCake] = useState({});
    const history = useHistory();
    let params = useParams();


    useEffect(() => {
        fetch(`/api/cake/${params.id}`)
            .then(res => res.json())
            .then(cake => {
                cake = cake.data;
                setCake(cake);
                window.scrollTo(0, 0);
            })
    }, [params]);


    function deleteCake() {

        fetch(`/api/cake/${params.id}`, {
            method: 'DELETE'
        }).then(response => {
            response.json();
            history.push("/");
            window.scrollTo(0, 0);
        });
    }


        return (cake ? <CakePageWrapper>
            <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1>Home</h1></Link>
            <CakeWrapper>
                <CakeImage src={cake.imageUrl}/>
                <CakeDetail>Name: {cake.name}</CakeDetail>
                <CakeDetail>Comment: {cake.comment}</CakeDetail>
                <CakeDetail>Yum Factor: {cake.yumFactor}</CakeDetail>
                <DeleteCake onClick={deleteCake}>Delete Cake</DeleteCake>
            </CakeWrapper>
        </CakePageWrapper> : '');

}

export default Cake;