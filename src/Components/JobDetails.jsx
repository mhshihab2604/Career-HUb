
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    // const idInt = parseInt(id);
    // const job = jobs.find(job => job.id == idInt);
    console.log(id,jobs);
    return (
        <div>
            <h2>Job Details of:</h2>
        </div>
    );
};

export default JobDetails;