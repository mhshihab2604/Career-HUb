import { useEffect, useState } from "react";
import Job from "./Job";
import myImage from '../assets/mhshihab.png'

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() =>{
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data));
    },[])
    return (
        <div className="container mx-auto">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={myImage} className="w-[400px] lg:w-full max-w-sm" />
                    <div>
                    <h1 className="text-2xl lg:text-7xl font-bold">One Step <br /> Closer To Your <br /> <span className="text-[#7E90FE]">Dream Job</span></h1>
                    <p className="py-6">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className="btn bg-[#7E90FE] text-white">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <h1 className="text-2xl lg:text-5xl text-center font-extrabold">Featured Jobs</h1>
                <p className="text-center font-medium">Explore thousands of job opportunities
                    with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                {
                  jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)  
                }
            </div>
            <div className="text-center mt-10">
                <div className={ dataLength === jobs.length && "hidden"}>
                    <button onClick={() => setDataLength(jobs.length)} className="btn bg-[#7E90FE] text-white">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;