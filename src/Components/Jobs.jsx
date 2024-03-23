import {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";
import {getStoredJobApplication} from "../LocalStorage";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";


const Jobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === "all"){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === "remote"){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if(filter === "onsite"){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs);
        }
    }
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            console.log(jobsApplied);

            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, []);
    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center mt-10 lg:mt-20">Applied Jobs</h2>
            <details className="dropdown inline-flex justify-center relative mt-10">
                <summary className="m-1 btn">Filter By</summary>
                <ul
                    className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}>
                        <a>All</a>
                    </li>
                    <li onClick={() => handleJobsFilter('remote')}>
                        <a>Remote</a>
                    </li>
                    <li onClick={() => handleJobsFilter('onsite')}>
                        <a>Onsite</a>
                    </li>
                </ul>
            </details>


            <div className="mt-20">
                {
                    displayJobs.map(
                        job => <li key={job.id}>
                            <div className="flex gap-5 flex-col lg:flex-row justify-around items-center border-2 rounded-lg p-5 mx-2">
                                <div className="card w-full lg:card-side gap-10">
                                    <figure><img className="w-[180px] bg-base-300 p-5" src={job.logo} alt="Movie"/></figure>
                                    <div className="space-y-2">
                                            <div className="space-y-2">
                                                <h1 className="text-lg font-semibold">{job.job_title}</h1>
                                                <p>{job.company_name}</p>
                                                <button className="btn border-2 border-[#7e90fe]">{job.remote_or_onsite}</button>
                                            </div>
                                            <div className="flex gap-5">
                                                <h2 className="flex"><MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn> {job.location}</h2>
                                                <h2 className="flex"><RiMoneyDollarCircleLine className="text-2xl"></RiMoneyDollarCircleLine> Salary: {job.salary}</h2>
                                            </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn bg-[#7e90fe] text-white">View Details</button>
                                </div>
                            </div>
                        </li>
                    )
                }
            </div>
        </div>
    );
};

export default Jobs;