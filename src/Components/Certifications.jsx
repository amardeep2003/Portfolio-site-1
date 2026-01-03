import React from 'react'

const Certifications = () => {

    const certifications = [
        {
            title: "Java Full Stack Development",
            org: "Jspiders, Hyderabad",
            duration: "2024 - 2025",
            description: "Comprehensive training in Java, Spring Boot, React JS, SQL, and full stack development"
        },
        {
            title: "Java Course",
            org: "GeeksforGeeks",
            duration: "",
            description: "Strong foundation in Core Java concepts with practical coding experience."
        },
        {
            title: "DSA Course",
            org: "Coding Spoon",
            duration: "2023",
            description: "Focused on Data Structures, Algorithms, and logic building through problem solving."
        },
        {
            title: "Web Development Bootcamp",
            org: "Udemy",
            duration: "2022",
            description: "Learned HTML, CSS, JavaScript, and modern web development practices."
        }
    ]



    return (
        <section id='certifications' className='max-w-6xl mx-auto px-6 py-24'>
            <h2 className='text-4xl font-bold text-blue-400 text-center mb-12 '>Certifications</h2>

            <div className='grid md:grid-cols-2 gap-8 '>
                {
                    certifications.map((cert,index) => (
                        <div key={index} className='bg-gradient-to-b from-slate-950 to-blue-950 rounded-xl p-6 shadow-lg hover:scale-105 transition-all duration-400'>
                            <h3 className='text-3xl font-bold text-blue-300 mb-2 mt-3'>{cert.title}</h3>
                            <p className='text-lg text-blue-200 font-semibold mb-2'>{cert.org}</p>

                            {cert.duration && (<p className='text-sm text-blue-400 mb-3'>{cert.duration}</p>)}

                            <p className='text-blue-100'>{cert.description}</p>
                        </div>
                    ))
                }
            </div>


        </section>
    )
}

export default Certifications