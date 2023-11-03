import React from "react";
import Card from "./Card";


const CardList = ({ onCardSelected, jobs}) => {
    return (
        <div id="cardList">
           {
                jobs.map(data => {
                    return <Card key={data.id} index={data.id} job={data} onCardSelected={onCardSelected}/>
                })
           }
        </div>
    ); 
}

export default CardList;