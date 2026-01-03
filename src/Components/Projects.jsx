import React, { useState } from 'react'

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            name: "Bookstore Management System",
            tech: "Java, Spring Boot, ReactJS, MySQL",
            points: [
                "Designed and implemented REST APIs for book inventory & user management.",
                "Integrated React frontend with backend APIs for CRUD operations.",
                "Built responsive UI using Tailwind CSS.",
                "Full stack project with clean UI, backend logic and database integration."
            ]
        },
        {
            name: "Retail Billing Software",
            tech: "Java, Spring Boot, ReactJS, MySQL, Tailwind, Bootstrap",
            points: [
                "Developed a Point of Sale (POS) billing system with React.js frontend and Spring Boot backend, enabling seamless product management, cart functionality, and invoice generation.",
                "Implemented Category & Item Management, Customer Details Form, Search & Filter, and Order History Module to simplify retail operations.",
                "Built a responsive UI with Bootstrap 5, optimized for both desktop and mobile devices, improving user experience and reducing manual billing efforts.",
                "Full stack project with clean UI, backend logic and database integration."
            ]
        }
    ]

    function handleToggle(index) {
        setSelectedProject(selectedProject === index ? null : index);
    }




    return (
        <>
            <section id="projects" className='max-w-6xl mx-auto px-6 py-24'>
                <h2 className='text-4xl font-bold text-blue-400 text-center mb-10'>Projects</h2>

                <div className='grid md:grid-cols-2 gap-8 perspective-1000'>

                    {/* Bookstore expand */}
                    <div className={`bg-gradient-to-b from-blue-950 to-slate-950   rounded-xl shadow-lg transition-all duration-300 hover:translate-y-4 hover:scale-105
                    ${selectedProject === 0 ? "md:col-span-2  p-8" : "p-6"}`}>

                        <h2 className='text-4xl font-bold text-blue-300 mb-5 mt-8'>
                            {projects[0].name}
                        </h2>
                        <p className='text-2xl font-semibold text-blue-200 mb-5'>{projects[0].tech}</p>

                        <div className="mt-10 mb-10 space-y-2 text-blue-200 text-xl">
                            <p>✔ REST APIs & CRUD Operations</p>
                            <p>✔ Responsive UI</p>
                            <p>✔ Clean Backend Architecture</p>
                        </div>

                        {
                            selectedProject === 0 && (
                                <ul className='list-disc pl-6 space-y-2 text-blue-100 mb-6'>
                                    {projects[0].points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )
                        }

                        <button onClick={() => handleToggle(0)}
                            className='w-full mt-4 px-4 py-2 rounded-lg text-white font-semibold 
                            bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700
             hover:from-purple-600 hover:via-indigo-600 hover:to-blue-700
             transition-all duration-300 hover:scale-105'>
                            {selectedProject === 0 ? "Close" : "View More"}
                        </button>

                    </div>


                    {/* Retail flip */}
                    <div className="relative bg-gradient-to-b from-slate-950 to-blue-950   rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-4 hover:scale-105">

                        {/* 🔹 HEIGHT SPACER (IMPORTANT) */}
                        <div className="invisible p-6">
                            <h3 className="text-xl font-bold mb-4">Project Details</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                {projects[1].points.map((p, i) => (
                                    <li key={i}>{p}</li>
                                ))}
                            </ul>
                            <button className="px-4 py-2">Close</button>
                        </div>

                        {/* 🔹 FLIP WRAPPER */}
                        <div
                            className={`absolute inset-0 transition-transform duration-700 transform-style-preserve-3d
      ${selectedProject === 1 ? "rotate-y-180" : ""}`}
                        >

                            {/* Front */}
                            <div className="absolute inset-0 p-6 backface-hidden">
                                <h2 className="text-4xl font-bold text-blue-300 mb-5 mt-8">
                                    {projects[1].name}
                                </h2>
                                <p className="text-2xl font-semibold text-blue-200 mb-6">{projects[1].tech}</p>

                                <div className="mt-10 mb-10 space-y-2 text-blue-200 text-xl">
                                    <p>✔ Responsive UI</p>
                                    <p>✔ Clean Backend Architecture</p>
                                    <p>✔ REST APIs & CRUD Operations</p>
                                </div>

                                <button
                                    onClick={() => handleToggle(1)}
                                    className="w-full px-4 py-2 rounded-lg text-white font-semibold
                                    bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700
             hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700
             transition-all duration-300 hover:scale-105"
                                >
                                    View More
                                </button>
                            </div>

                            {/* Back */}
                            <div className="absolute inset-0 p-6 rotate-y-180 backface-hidden">
                                <h3 className="text-xl font-bold text-blue-300 mb-4">
                                    Project Details
                                </h3>

                                <ul className="list-disc pl-6 space-y-2 text-blue-100 mb-6">
                                    {projects[1].points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => handleToggle(1)}
                                    className="w-full px-4 py-2 rounded-lg text-white font-semibold 
                                    bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700
             hover:from-purple-600 hover:via-indigo-600 hover:to-blue-700"
                                >
                                    Close
                                </button>
                            </div>

                        </div>
                    </div>


                </div>


            </section>
        </>
    )
}

export default Projects