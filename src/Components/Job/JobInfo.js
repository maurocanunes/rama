import React from "react";
import { useParams } from "react-router-dom";

const JobInfo = ({ cardId, selectedJob, getJobs }) => {

    const {id} = useParams();

    if (!selectedJob.id){
        getJobs(id)
    }

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