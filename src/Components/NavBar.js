import { Link } from "react-router-dom";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ReactComponent as Tuner } from "../Assets/disc-with-shine-svgrepo-com.svg";

export default function NavBar() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/songs/new`);
  }

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 hover:text-gray-900 text-3xl font-bold"
             href="/songs"
          >
            Songs
          </a>
        </nav>
        <a href="/"
          className=" flex 
                      text-center 
                      lg:order-none 
                      lg:w-1/5 
                      title-font 
                      font-medium 
                      items-center 
                      text-gray-900 
                      lg:items-center 
                      lg:justify-center 
                      mb-4 md:mb-0">
          <Tuner className="rotate w-20 h-20 "/>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button
            type="button"
            onClick={() => handleClick()}
            className=" inline-flex 
                        items-center 
                        bg-gray-100 
                        border-0 
                        py-2 
                        px-4 
                        focus:outline-none 
                        hover:bg-gray-200 
                        rounded 
                        text-base 
                        mt-4 
                        md:mt-0
                        text-3xl
                        font-bold
            ">
              Add Song
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-10 h-10 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
              </svg>
          </button>
        </div>
      </div>
    </header>

    
  );
}