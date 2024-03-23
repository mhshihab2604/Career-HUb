import {useLoaderData, useParams} from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaShoppingBag} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const notify = () =>{ 
        saveJobApplication(idInt);
        toast("You have applied successfully");
    }
    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center mt-10 lg:mt-20">Job Details</h2>
            <div className="gap-4 mx-2 flex flex-col lg:flex-row mt-10 lg:mt-28">
                <div className="border lg:col-span-3 space-y-5 p-4">
                    <h1><small className="font-bold text-lg">Job Description:</small> {job.job_description}</h1>
                    <h1><small className="font-bold text-lg">Job Responsibility:</small> {job.job_responsibility}</h1>
                    <h1><small className="font-bold text-lg">Educational Requirements: <br /></small> {job.educational_requirements}</h1>
                    <h1><small className="font-bold text-lg">Experiences: <br /></small> {job.experiences}</h1>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Job Details</h2>
                            <hr />
                            <div>
                            <p className="flex items-center gap-2"><RiMoneyDollarCircleLine className="text-[#7E90FE]"></RiMoneyDollarCircleLine> Salary:</p>
                            <p className="flex items-center gap-2"><FaShoppingBag className="text-[#7E90FE]"></FaShoppingBag> Job Tittle:</p>
                            </div>
                            <h2 className="card-title">Contact Information</h2>
                            <hr />
                            <div>
                            <p className="flex items-center gap-2"><FiPhone className="text-[#7E90FE]"></FiPhone> Phone:</p>
                            <p className="flex items-center gap-2"><MdOutlineMail className="text-[#7E90FE]"></MdOutlineMail> Email:</p>
                            <p className="flex items-center gap-2"><SlLocationPin className="text-[#7E90FE]"></SlLocationPin> Address:</p>
                            </div>
                            <div className="card-actions">
                                <button onClick={notify} className="btn bg-[#7E90FE] text-white w-full">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;