import React from 'react';
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";
import GoToHome from "./GoToHome";

const ErrorPageWrapper = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
`;

const NotFoundPage = () => {

    return <ErrorPageWrapper>
            <GoToHome/>
            <ErrorMessage error={true} message={'404 Page Not Found'}></ErrorMessage>
        </ErrorPageWrapper>;
};
export default NotFoundPage;