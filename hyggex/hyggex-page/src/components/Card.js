import React from 'react'

export default function Card() {
    return (
        <>

            <p className=" text-2xl text-blue-800 font-bold mt-10">Relations and Functions ( Mathematics )</p>

            <div className="sub-list mt-12">
                <ul className="flex flex-row aling-center justify-center gap-1 ">
                    <li
                        className="px-5 py-2 border-b-4 border-transparent  hover:border-blue-800 hover:text-blue-900 font-bold text-gray-600">
                        Study</li>
                    <li
                        className="px-5 py-2 border-b-4 border-transparent hover:border-blue-800 hover:text-blue-900 font-bold text-gray-600">
                        Quiz</li>
                    <li
                        className="px-5 py-2 border-b-4 border-transparent hover:border-blue-800 hover:text-blue-900 font-bold text-gray-600">
                        Test</li>
                    <li
                        className="px-5 py-2 border-b-4 border-transparent hover:border-blue-800 hover:text-blue-900 font-bold text-gray-600">
                        Game</li>
                    <li
                        className="px-5 py-2 border-b-4 border-transparent hover:border-blue-800 hover:text-blue-900 font-bold text-gray-600">
                        Other</li>
                </ul>
            </div>
            <br />
            <div className="main-card h-96 " id="front">
                <div
                    className="card  h-60 w-96 mx-auto rounded-3xl bg-gradient-to-tr from-cyan-500 from-10% to-blue-900 to-70%">
                    <div className="icon flex justify-between text-xl relative top-5 mx-5 text-white">
                        <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                        <i className='fas fa-volume-up '></i>
                    </div>

                    <p className="txt flex justify-center relative top-20  text-3xl text-white ">
                        9 + 6 + 7x - 2x - 3
                    </p>

                </div>


                {/* <!-- <div id="back"
        className="card hidden h-60 w-96 mx-auto rounded-3xl bg-gradient-to-tr from-blue-500 from-10% to-blue-900 to-70%">
        <div className="icon flex justify-between text-xl relative top-5 mx-5 text-white">
            <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
            <i className='fas fa-volume-up '></i>
        </div>

        <p className="txt flex justify-center relative top-20  text-3xl text-white ">
            5x+12
        </p>

    </div> --> */}

                <div className="controls my-4 w-96 mx-auto flex justify-evenly align-middle">
                    <i className="fas fa-redo px-3 py-2 text-blue-800"></i>
                    <i
                        className="fas fa-angle-left rounded-full px-3 py-2  bg-gradient-to-b from-blue-900 from-60% to-blue-700 text-white"></i>
                    <i className="py-1">1/10</i>
                    <i
                        className="fas fa-angle-right rounded-full  px-3 py-2 bg-gradient-to-b from-blue-900 from-60% to-blue-700 text-white"></i>
                    <i className="fas fa-expand px-3 py-2 text-blue-800 "></i>
                </div>
            </div>

        </>
    )
}
