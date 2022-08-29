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
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a class="mr-5 hover:text-gray-900 text-3xl font-bold"
             href="/songs"
          >
            Songs
          </a>
        </nav>
        <a class="flex text-center  lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        {/* <svg className="rotate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 160C202.9 160 160 202.9 160 256s42.92 96 96 96c53.08 0 96-42.92 96-96S309.1 160 256 160zM256 288C238.3 288 224 273.7 224 256s14.33-32 32-32c17.67 0 32 14.33 32 32S273.7 288 256 288zM256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256c141.4 0 256-114.6 256-256S397.4 0 256 0zM256 384c-70.75 0-128-57.25-128-128s57.25-128 128-128s128 57.25 128 128S326.8 384 256 384z"/>
        </svg> */}
        <Tuner className="rotate w-20 h-20 "/>
        {/* <h2 className="text-5xl font-extrabold text-black dark:text-white sm:text-4xl">
                <span className="block text-gray-500 text-4xl mt-10 mb-6">
                    TUNER
                </span>
            </h2>   */}
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button
            type="button"
            onClick={() => handleClick()}
            class=" inline-flex 
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
              </svg>
          </button>
        </div>
      </div>
    </header>

    
  );
}