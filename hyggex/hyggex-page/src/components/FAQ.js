import React from 'react'

export default function FAQ() {
    document.addEventListener('DOMContentLoaded', function () {
        const accordionItems = document.querySelectorAll('.border-b');

        accordionItems.forEach(item => {
            const accordionTitle = item.querySelector('.cursor-pointer');
            const accordionContent = item.querySelector('.hidden');
            const arrow = document.getElementById('down');

            accordionTitle.addEventListener('click', () => {
                const isOpen = accordionContent.classList.contains('hidden');
                accordionContent.classList.toggle('hidden', !isOpen);
                if (isOpen) {
                    arrow.style.transform
                        = 'rotate(180deg)';
                }
                else {
                    arrow.style.transform
                        = 'rotate(0deg)';
                }

            });
        });
    });
    
    return (

        <>
           
            <h1 className="text-blue-900 text-6xl font-bold mt-3">FAQ</h1>

            <div className="w-full my-5">
                {/* <!-- Accordion --> */}
                <div className="bg-white shadow-md rounded-lg">
                    {/* <!-- Accordion Item 1 --> */}
                    <div className="border-2 rounded-3xl border-blue-800 border-b">
                        {/* <!-- Accordion Title --> */}
                        <div className="flex justify-between items-center p-4 cursor-pointer select-none">
                            <span className="text-lg font-semibold">Accordion Item 1</span>
                            <i className="fas fa-angle-down" id="down"></i>
                        </div>
                        {/* <!-- Accordion Content --> */}
                        <div className="px-4 py-2 hidden">
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
