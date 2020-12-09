import React from "react";
import styled from "styled-components";
import plus from "../images/plus.png";
import CakeInGrid from "./CakeInGrid";

const CakeGridWrapper = styled.div`
    overflow: hidden;
    margin-bottom: 100px;
`;


const CakeGrid = ({cakes}) => {

    const cakeMap = cakes.map((item) =>
        <CakeInGrid key={item.id} link={`/cake/${item.id}`} src={item.imageUrl} label={item.name}/>
    );

    cakeMap.unshift(<CakeInGrid key={'addNew'} link={'/newCake'} src={plus} label={'Add New Cake'}/>);

    return <CakeGridWrapper>
        {cakeMap}
    </CakeGridWrapper>
};

export default CakeGrid;