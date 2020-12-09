import React, {useState} from 'react';
import styled from "styled-components";
import {useHistory} from "react-router";
import {css} from 'styled-components';
import {device} from "./device";
import {Link} from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const sharedInputStyle = css`
    @media ${device.mobileS} {
        width: 300px;

    }
    
    @media ${device.tablet} {
        width: 400px;
    }


    @media ${device.laptop} {
        width: 400px;
    }

    margin-bottom: 2vh;
    border-right: none;
    border-top: none;
    border-left: none;
    background-color:transparent;
    outline: none;
    color: black;
    caret-color: white;
    height: 40px;
    font-size: 20px;
`;

const NewCakeFormWrapper = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;

`;

const NewCakeForm = styled.form`
    margin-top: 50px;
    font-size: 20px;
`;

const FormInput = styled.input`
    ${sharedInputStyle}
    
    ::placeholder {
        color: grey;
        font-size: 20px;
    }
`;

const DropDown = styled.select`
    ${sharedInputStyle}
    border-width: 2px;

`;

const SubmitButton = styled.button`
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

const NewCake = () => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [yumFactor, setYumFactor] = useState('');
    const [postError, setPostError] = useState(false);
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();

        const cake = {
            name,
            comment,
            imageUrl,
            yumFactor
        };
        
        fetch(`/api/cake`, {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(cake)
        }).then(response => {
            if(response.ok) {
                history.push("/");
            } else {
                setPostError(true);
            }
        }).catch(error => {
            console.log(error);
            setPostError(true);
        });
    }


    return <NewCakeFormWrapper>
        <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1>Home</h1></Link>
        <NewCakeForm onSubmit={handleSubmit}>
            <div className="form-group">
                <FormInput
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Cake Name"
                    autoComplete={"off"}
                    maxLength={30}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <FormInput
                    type="text"
                    className="form-control"
                    name="comment"
                    placeholder="Comment"
                    autoComplete={"off"}
                    maxLength={200}
                    onChange={e => setComment(e.target.value)}
                />
            </div>

            <div className="form-group">
                <FormInput
                    type="text"
                    className="form-control"
                    name="imageUrl"
                    placeholder="Image Url"
                    autoComplete={"off"}
                    onChange={e => setImageUrl(e.target.value)}
                />
            </div>

            <div className="form-group">
                <DropDown name="yumFactor" value={yumFactor} onChange={e => setYumFactor(e.target.value)}>
                    <option value="" disabled>Yum Factor</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </DropDown>
            </div>

            <div>
                <SubmitButton type="submit" disabled={!(name && comment && imageUrl && yumFactor)}>
                    Create Cake
                </SubmitButton>
            </div>

            <ErrorMessage error={postError} message={'There was an error posting the new cake'}/>
        </NewCakeForm>
    </NewCakeFormWrapper>;

};

export default NewCake;