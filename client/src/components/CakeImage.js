import React from "react";
import styled from "styled-components";
import {device} from "./device";

const CakeImg = styled.img`
    @media ${device.mobileS} {
        width: ${props => props.mobileWidth}px;
        height: ${props => props.mobileWidth}px;
    }
    
    @media ${device.laptop} {
        width: ${props => props.laptopWidth}px;
        height: ${props => props.laptopWidth}px;
    }

    background: rgba(255,255,255,.6);
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
`;

const CakeImage = ({src, mobileWidth, laptopWidth}) => {
    return <CakeImg src={src} mobileWidth={mobileWidth} laptopWidth={laptopWidth}/>;
};

export default CakeImage;