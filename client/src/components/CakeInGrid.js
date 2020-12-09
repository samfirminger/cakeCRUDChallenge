import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import {device} from "./device";
import CakeImage from "./CakeImage";

const CakeWrapper = styled.div`
    @media ${device.mobileS} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: 50%;
    }
    
    @media ${device.laptopL} {
        width: 20%;
    }
    
    display: inline-block;
    margin-top: 50px;
    float: left;
`;


const CakeName = styled.p`
    font-size: 20px;
    max-width: 250px;
    margin: 0 auto;
    margin-top: 20px;
`;

const CakeInGrid = ({link, src, label}) => {
    return <CakeWrapper>
        <Link to={link} style={{textDecoration: 'none', color: 'black'}}>
            <CakeImage src={src} mobileWidth={250} laptopWidth={250}/>
            <CakeName>{label}</CakeName>
        </Link>
    </CakeWrapper>;
};

export default CakeInGrid;