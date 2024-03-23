import { MdOutlineLocationOn } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,job_type,location,salary} = job;
    return (
        <div>
            <div className="card mx-2 h-full bg-base-100 shadow-xl p-5 border-2 border-[#7E90FE]">
                <figure><img className="w-[200px]"
                    src={logo}
                    alt="Shoes"/></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-extrabold">{job_title}</h2>
                    <p className="text-xl font-semibold">{company_name}</p>
                    <div className="card-actions flex">
                        <button className="btn border-2 text-[#7E90FE] border-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="btn border-2 text-[#7E90FE] border-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className="flex gap-5">
                        <h2 className="flex"><MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn> {location}</h2>
                        <h2 className="flex"><RiMoneyDollarCircleLine className="text-2xl"></RiMoneyDollarCircleLine> Salary: {salary}</h2>
                    </div>
                    <div>
                       <Link to={`/job/${id}`}>
                            <button className="btn w-32 text-white bg-[#7E90FE]">View Details</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;