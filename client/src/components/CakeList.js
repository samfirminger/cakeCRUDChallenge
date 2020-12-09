import React from "react";
import styled from "styled-components";
import plus from "../images/plus.png";
import CakeInGrid from "./CakeInGrid";

const CakeListWrapper = styled.div`
    overflow: hidden;
    margin-bottom: 100px;
`;


const CakeList = ({cakes}) => {

    const cakeMap = cakes.map((item) =>
        <CakeInGrid key={item.id} link={`/cake/${item.id}`} src={item.imageUrl} label={item.name}/>
    );

    cakeMap.unshift(<CakeInGrid key={'addNew'} link={'/newCake'} src={plus} label={'Add New Cake'}/>);

    return <CakeListWrapper>
        {cakeMap}
    </CakeListWrapper>
};

export default CakeList;