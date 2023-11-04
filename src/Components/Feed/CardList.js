import React from "react";
import Card from "./Card";


const CardList = ({ setCardId, jobs}) => {
    return (
        <div id="cardList">
           {
                jobs.map(data => {
                    return <Card key={data.id} index={data.id} job={data} setCardId={setCardId}/>
                })
           }
        </div>
    ); 
}

export default CardList;