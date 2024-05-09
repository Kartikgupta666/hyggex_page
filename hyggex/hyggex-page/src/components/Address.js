import React from 'react'

export default function Address() {
  return (
    <>
       <div className="adr">
            <ul className="flex gap-1">
                <li className="text-gray-600 hover:text-blue-900 font-bold"><i className="fas fa-home "></i></li>
                <li className="text-gray-600 hover:text-blue-900 font-bold"><i className="fas fa-angle-right"></i></li>
                <li className="text-gray-600 hover:text-blue-900 font-bold">Flashcard</li>
                <li className="text-gray-600 hover:text-blue-900 font-bold"><i className="fas fa-angle-right"></i></li>
                <li className="text-gray-600 hover:text-blue-900 font-bold">Mathematics</li>
                <li className="text-gray-600 hover:text-blue-900 font-bold"><i className="fas fa-angle-right"></i></li>
                <li className="text-gray-600 hover:text-blue-900 font-bold">Relation and function</li>
            </ul>
        </div>
    </>
  )
}
