import React from "react";

const JobInfo = ({ cardId, selectedJob }) => {



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