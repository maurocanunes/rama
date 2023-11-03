import React from "react";

const Card = ({index, job, onCardSelected}) => {
    let fields;
    fields = <>
                <h2>{job.title}</h2>
                <p>{job.description.substring(0, 100)}...</p>
            </>

    // if(data.name !== undefined){
    //     fields = <h2>{data.name}</h2>
    // } else {
    //     fields = 
    //         <><h2>{data.title}</h2>
    //         <p>Episode: {data.episode_id}</p></>
  
    return (
        <div id={index} onClick={() => onCardSelected(index)}className="divClass tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5">
            {/* <img alt="robots" src={`https://robohash.org/${id}?200x200`} /> */}
            <div>
                {fields}
            </div>
        </div>
    );
}

export default Card;