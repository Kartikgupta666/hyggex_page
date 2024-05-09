import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="bg-white flex flex-row justify-around my-6 ">
        <div className="logo">
            <img className="w-[123px] h-full lg:w-48 lg:h-9"
                src="https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png" alt="Logo"
                loading="lazy"/>
        </div>
        <div className="list ">
            <ul className="flex flex-row align-middle ">
                <li
                    className=" hover:bg-gradient-to-b from-blue-900 from-20% to-blue-700  rounded-full hover:text-white px-5 py-2">
                    Home</li>
                <li
                    className=" hover:bg-gradient-to-b from-blue-900 from-20% to-blue-700  rounded-full hover:text-white px-5 py-2">
                    Flashcard</li>
                <li
                    className=" hover:bg-gradient-to-b from-blue-900 from-20% to-blue-700  rounded-full hover:text-white px-5 py-2">
                    Contact</li>
                <li
                    className=" hover:bg-gradient-to-b from-blue-900 from-20% to-blue-700  rounded-full hover:text-white px-5 py-2">
                    FAQ</li>
                <li
                    className=" hover:bg-gradient-to-b from-blue-900 from-20% to-blue-700  rounded-full hover:text-white px-5 py-2">
                    <button>Login</button>
                </li>
            </ul>
        </div>
    </nav>

    </>
  )
}
