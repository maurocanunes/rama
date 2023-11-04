import React from "react";
import { useParams } from "react-router-dom";

const JobInfo = ({ cardId, selectedJob }) => {

    // const {id} = useParams();

    // console.log('url id', id)

    return (
        <>
            <div>
                <h2>{selectedJob.title}</h2>
                <p>{selectedJob.description}</p>
            </div>
        </>
    )
}

export default JobInfo;