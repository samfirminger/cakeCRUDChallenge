import React, {useState} from 'react';
import styled from "styled-components";
import {useHistory} from "react-router";

const NewCakeFormWrapper = styled.div`

`;

const NewCakeForm = styled.form`
    margin-top: 50px;
    font-size: 20px;
`;

const FormInput = styled.input`
    margin-bottom: 2vh;
    border-right: none;
    border-top: none;
    border-left: none;
    background-color:transparent;
    outline: none;
    color: black;
    caret-color: white;
    width: 200px;
    height: 40px;
    font-size: 20px;
    
    ::placeholder {
        color: grey;
        font-size: 20px;
    }
`;

const DropDown = styled.select`
    margin-bottom: 2vh;
    border-width: 2px;
    border-right: none;
    border-top: none;
    border-left: none;
    background-color:transparent;
    outline: none;
    color: grey;
    caret-color: white;
    width: 200px;
    height: 40px;
    font-size: 20px;


    ::placeholder {
        color: grey;
    }
`;

const SelectLabel = styled.span`

`;

const SubmitButton = styled.button`
    background: rgba(255,255,255,.2);
    padding: 2vh;
    border: none;
    cursor: pointer;
    border-radius: 4px 4px;
    width: 200px;
    font-size: 20px;
`;

const NewCake = () => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [yumFactor, setYumFactor] = useState('');
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();

        const cake = {
            name,
            comment,
            imageUrl,
            yumFactor
        };

        console.log(cake);

        fetch(`/api/cake`, {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(cake)
        }).then(response =>
        {
            response.json();
            history.go(0);
        });

        setName('');
        setComment('');
        setImageUrl('');
        setYumFactor('');

    }

    return <NewCakeFormWrapper>
        <NewCakeForm onSubmit={handleSubmit}>
            <div  className="form-group">
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

            <div  className="form-group">
                <FormInput
                    type="text"
                    className="form-control"
                    name="imageUrl"
                    placeholder="Image Url"
                    autoComplete={"off"}
                    onChange={e => setImageUrl(e.target.value)}
                />
            </div>

            <div  className="form-group">
                <DropDown name="yumFactor" value={yumFactor} onChange={e => setYumFactor(e.target.value)}>
                    <option value="" disabled selected>Yum Factor</option>
                    <option value={1}>1</option>
                    <option value={1}>2</option>
                    <option value={1}>3</option>
                    <option value={1}>4</option>
                    <option value={1}>5</option>
                </DropDown>
            </div>

            <div >
                <SubmitButton type="submit">
                    Create
                </SubmitButton>
            </div>
        </NewCakeForm>
    </NewCakeFormWrapper>;

};

export default NewCake;