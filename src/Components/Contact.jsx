// ContactSection.jsx
import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const contacts = [
  {
    id: 1,
    icon: <MdEmail className="text-red-500 text-3xl" />,
    title: "Email",
    value: "kamardeep418@gmail.com",
    link: "mailto:kamardeep418@gmail.com",
  },
  {
    id: 2,
    icon: <MdPhone className="text-green-500 text-3xl" />,
    title: "Phone",
    value: "+91 91096 35876",
    link: "tel:9109635876",
  },
  {
    id: 3,
    icon: <FaLinkedin className="text-blue-700 text-3xl" />,
    title: "LinkedIn",
    value: "linkedin.com/in/amardeep-kumar-sahu",
    link: "https://www.linkedin.com/in/amardeep-kumar-sahu-319138226/",
  },
  {
    id: 4,
    icon: <FaGithub className="text-gray-800 text-3xl" />,
    title: "GitHub",
    value: "github.com/amardeep2003",
    link: "https://github.com/amardeep2003",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-slate-950 to-blue-950 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-blue-400">Contact Me</h3>
          <p className="text-blue-100 text-lg">
            Let’s connect and build something amazing together 🚀
          </p>
        </div>

        {/* Main Content: Left Cards + Right Form */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Side: Contact Cards */}
          <div className="md:w-1/2 flex flex-col gap-9 items-center md:items-center ">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className=" w-100 flex flex-col items-center justify-center md:items-start p-6  rounded-xl bg-gradient-to-b from-blue-950 to-slate-950   shadow-lg hover:scale-105 transition-all duration-300 w-60"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-2 justify-center md:justify-center w-full">
                  {contact.icon}
                  <h4 className="text-xl font-semibold text-blue-300">{contact.title}</h4>
                </div>

                {/* Actual Value */}
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-blue-400 text-center  md:text-center break-all w-full"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full bg-gradient-to-b from-blue-950 to-slate-950 rounded-2xl shadow-xl p-8">
              <h4 className="text-2xl font-bold text-blue-400 mb-6 text-center">
                Send Me a Message
              </h4>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-blue-200 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 text-blue-100 border border-slate-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-blue-200 mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 text-blue-100 border border-slate-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-blue-200 mb-2">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 text-blue-100 border border-slate-700 focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600
                  hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Send Message 🚀
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
