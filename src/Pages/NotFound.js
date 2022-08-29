import { useNavigate } from "react-router-dom";
import { ReactComponent as Warning } from "../Assets/warning.svg";

export default function NotFound() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/songs`);
  }

  return (
    <div className="bg-white  ">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        {/* <div class="flex flex-wrap items-center justify-center">
          <span class="w-full block mx-auto p-6">
            <Warning className="w-20 h-20 "/> 
          </span>
        </div> */}
        <h2 className="text-5xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block text-red-600 text-8xl mt-10 mb-10">
                404 ERROR
            </span>
            <span className="block text-gray-800">
              Page requested not found 
            </span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button 
              onClick={() => handleClick()}
              type="button" 
              className="py-4 px-6 bg-teal-400 hover:bg-telj-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Back to Songs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}