import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-[#AECFE3] min-h-screen min-w-full">
            <div className="pt-20 space-y-10">
                <h2 className="text-7xl text-center">Oops!!!</h2>
                <img className="mx-auto h-[200px] w-[450px]" src="https://i.ibb.co/cgLZ6Hx/error.jpg" alt="" />
                <div className="text-center mx-auto rounded-lg p-2 text-white font-medium bg-[#7E90FE] w-36">
                    <Link to="/">Go back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;