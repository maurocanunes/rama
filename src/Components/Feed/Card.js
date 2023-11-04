import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({index, job, setCardId}) => {
    let fields;
    fields = <>
                <h2>{job.title}</h2>
                <p>{job.description.substring(0, 100)}...</p>
            </>
    const navigate = useNavigate();

    const click = () => {
        setCardId(index);
        navigate(`/job/${index}`)
    }
  
    return (
        <div id={index} onClick={click}className="divClass tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5">
            {/* <img alt="robots" src={`https://robohash.org/${id}?200x200`} /> */}
            <div>
                {fields}
            </div>
        </div>
    );
}

export default Card;