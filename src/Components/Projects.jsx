import React, { useState } from 'react'

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            name: "Multi-Tenant Blog System",
            tech: "Node.js, Express.js, MongoDB, ReactJS, JWT",
            points: [
                "Developed a multi-tenant blogging platform supporting multiple organizations with complete data isolation",
                "Implemented tenant-based architecture to ensure each organization accesses only its own data",
                "Built secure authentication system using JWT (JSON Web Token)",
                "Designed role-based access control (RBAC)",
                "Admins can manage users and all content",
                "Regular users can create, update, and delete their own posts",
                "Created tenant-aware REST APIs for handling organization-specific requests",
                "Developed separate dashboards for admin and users based on roles",
                "Used MongoDB for scalable data storage with tenant separation",
                "Integrated frontend using ReactJS for a responsive user experience",
            ]
        },
        {
            name: "URL Shortener Application",
            tech: "Node.js, Express.js, MongoDB, EJS, JWT",
            points: [
                "Developed a secure URL shortening web application with user authentication",
                "Implemented JWT and cookie-based login system for secure sessions",
                "Enabled users to create, view, and manage their own shortened URLs",
                "Ensured data privacy by allowing users to access only their own URLs through protected routes",
                "Built click tracking feature to monitor number of visits on each shortened link",
                "Used MongoDB to store user data and URL mappings efficiently",
                "Designed server-side rendered UI using EJS templates",
                "Implemented middleware for authentication and authorization"
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
        },
        {
            name: "Bookstore Management",
            tech: "Java, Spring Boot, ReactJS, MySQL",
            points: [
                "Designed and implemented REST APIs for book inventory & user management.",
                "Integrated React frontend with backend APIs for CRUD operations.",
                "Built responsive UI using Tailwind CSS.",
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

                <div className='grid md:grid-cols-2 gap-8'>

                    {projects.map((project, index) => (

                        <div
                            key={index}
                            className="relative bg-gradient-to-b from-slate-950 to-blue-950 rounded-xl shadow-lg overflow-hidden 
      transition-all duration-300 hover:-translate-y-4 hover:scale-105 min-h-[520px]"
                        >

                            {/* FLIP WRAPPER */}
                            <div
                                className={`absolute inset-0 transition-transform duration-700 transform-style-preserve-3d
        ${selectedProject === index ? "rotate-y-180" : ""}`}
                            >

                                {/* FRONT SIDE */}
                                <div className="absolute inset-0 p-6 backface-hidden">

                                    <h2 className="text-4xl font-bold text-blue-300 mb-5 mt-8">
                                        {project.name}
                                    </h2>

                                    <p className="text-2xl font-semibold text-blue-200 mb-6">
                                        {project.tech}
                                    </p>

                                    <div className="mt-10 mb-10 space-y-2 text-blue-200 text-xl">
                                        <p>✔ Full Stack Project</p>
                                        <p>✔ Secure & Scalable</p>
                                        <p>✔ Clean Architecture</p>
                                    </div>

                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="w-full px-4 py-2 rounded-lg text-white font-semibold
            bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700
            hover:scale-105 transition-all duration-300"
                                    >
                                        View More
                                    </button>

                                </div>

                                {/* BACK SIDE */}
                                <div className="absolute inset-0 p-6 rotate-y-180 backface-hidden">

                                    <h3 className="text-2xl font-bold text-blue-300 mb-4">
                                        Project Details
                                    </h3>

                                    <ul className="list-disc pl-6 space-y-2 text-blue-100 mb-6
          max-h-[300px] overflow-y-auto pr-2">
                                        {project.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="w-full px-4 py-2 rounded-lg text-white font-semibold
            bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700
            hover:scale-105 transition-all duration-300"
                                    >
                                        Close
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>




            </section>
        </>
    )
}

export default Projects
