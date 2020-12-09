import React from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";

const ErrorPageWrapper = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
`;

const NotFoundPage = () => {

    return <ErrorPageWrapper>
            <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1>Go to Home</h1></Link>
            <ErrorMessage error={true} message={'404 Page Not Found'}></ErrorMessage>
        </ErrorPageWrapper>;
}
export default NotFoundPage;