import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/songs`);
  }

  return (
    <div className="bg-white  ">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-5xl font-extrabold text-black dark:text-white sm:text-4xl">
                <span className="block text-gray-500 text-6xl mt-10 mb-6">
                    Tuner 1.0
                </span>
                <span className="block text-teal-500">
                  The Greatest Music App!
                </span>
            </h2>
            <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
              Create, Listen and Share lists with your favorite songs! Play it anywhere, anytime!
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow">
                    <button 
                      onClick={() => handleClick()}
                      type="button" 
                      className="py-4 px-6 bg-teal-600 hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Go to Songs
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}