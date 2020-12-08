import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import {device} from "./device";

const CakeListWrapper = styled.div`
    margin-bottom: 50px;
`;


const CakeWrapper = styled.div`
    @media ${device.mobileS} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: 50%;

    }
    
    @media ${device.laptop} {
        width: 20%;
    }
    
    display: inline-block;
    margin-top: 50px;
    float: left;
`;

const CakeImage = styled.img`
    object-fit: cover;
    width: 250px;
    height: 250px;
    border-radius: 8px;
`;

const CakeName = styled.p`
    font-size: 20px;
    max-width: 250px;
    margin: 0 auto;
`;

const CakeList = ({cakes}) => {

    return <CakeListWrapper>
    {cakes.map((item) => {
            return (
                <CakeWrapper key={item.id}>
                    <Link to={`/cake/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <CakeImage src={item.imageUrl}/>
                        <CakeName>{item.name}</CakeName>
                    </Link>
                </CakeWrapper>
            );
        })}
    </CakeListWrapper>

};

export default CakeList;