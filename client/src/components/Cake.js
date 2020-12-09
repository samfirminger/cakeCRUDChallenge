import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useHistory, useParams} from "react-router";
import ErrorMessage from "./ErrorMessage";
import CakeImage from "./CakeImage";

const CakePageWrapper = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;

`;

const CakeWrapper = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
    font-size: 25px;
`;


const CakeDetail = styled.p`
    display: block;
    width: 100%;
`;

const DeleteCake = styled.button`
    margin-top: 20px;
    background: rgba(255,0,0,.6);
    padding: 2vh;
    border: none;
    cursor: pointer;
    border-radius: 4px 4px;
    width: 200px;
    font-size: 20px;
    
    &:hover {
        background: rgba(179,0,0,.8);
    }
`;


const Cake = () => {

    const [cake, setCake] = useState({});
    const [deleteError, setDeleteError] = useState(false);
    const history = useHistory();
    let params = useParams();


    useEffect(() => {
        fetch(`/api/cake/${params.id}`)
            .then(response => response.json())
            .then(cake => {
                cake = cake.data;
                setCake(cake);
            });
    }, [params]);


    function deleteCake() {

        fetch(`/api/cake/${params.id}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) {
                response.json();
                history.push("/");
                window.scrollTo(0, 0);
            } else {
                setDeleteError(true);
            }
        }).catch(error => {
            setDeleteError(true);
        });
    }


    return <CakePageWrapper>
        <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1>Go to Home</h1></Link>
        {cake ?
            <CakeWrapper>
                <CakeImage src={cake.imageUrl} mobileWidth={250} laptopWidth={400}/>
                <CakeDetail>Name: {cake.name}</CakeDetail>
                <CakeDetail>Comment: {cake.comment}</CakeDetail>
                <CakeDetail>Yum Factor: {cake.yumFactor}</CakeDetail>
                <DeleteCake onClick={deleteCake}>Delete Cake</DeleteCake>
                <ErrorMessage error={deleteError} message={'There was a problem deleting the cake'}/>
            </CakeWrapper> : <ErrorMessage error={true} message={'Cake not found'}/>}
    </CakePageWrapper>;

};

export default Cake;