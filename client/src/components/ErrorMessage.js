import React from "react";
import styled from "styled-components";

const ErrorPost = styled.div`
    margin-top: 30px;
    color: red;
    font-size: 20px;    
`;

const ErrorMessage = ({error, message}) => {

    return (error ? <ErrorPost>
        <span>{message}</span>
    </ErrorPost> : '');
};

export default ErrorMessage;