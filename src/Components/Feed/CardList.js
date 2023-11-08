import React from "react";
import Card from "./Card";
import Navigation from "../Navigation/Navigation";


const CardList = ({ messages }) => {
    return (
        <>
            <Navigation />
            <div id="cardList">
            {
                messages.map(data => {

                    return <Card key={data.id} index={data.id} message={data} />
                    })
                }
            </div>
        </>
    ); 
}

export default CardList;