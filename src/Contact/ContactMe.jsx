import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa"; // Social Media Icons
import { Link } from "react-router-dom";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here (like sending an email)
    alert("Message Sent!");
  };

  return (
    <section className="w-11/12 mx-auto py-16" id="contact">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Contact Me</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d05]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d05]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d05]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#ff4d05] text-white py-3 rounded-lg hover:bg-[#e14b05] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
          <p className="text-lg text-gray-600 mb-6">
            Feel free to reach out to me for collaborations, job opportunities, or just a friendly chat. You can contact me via the following channels:
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#ff4d05] text-xl" />
              <Link to="mailto:chakmapritom1@gmail.com" className="text-gray-800 hover:text-[#ff4d05] font-medium text-lg">
                chakmapritom1@gmail.com
              </Link>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-[#0077b5] text-xl" />
              <Link
                to="https://www.linkedin.com/in/pritomchakma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#0077b5] font-medium text-lg"
              >
                LinkedIn Profile
              </Link>
            </div>

            {/* GitHub */}
            <div className="flex items-center space-x-4">
              <FaGithub className="text-[#333] text-xl" />
              <Link
                to="https://github.com/PritomChakma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#333] font-medium text-lg"
              >
                GitHub Repository
              </Link>
            </div>

            {/* Facebook */}
            <div className="flex items-center space-x-4">
              <FaFacebook className="text-[#3b5998] text-xl" />
              <Link
                to="https://web.facebook.com/pritom.chakma.716/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#3b5998] font-medium text-lg"
              >
                Facebook Profile
              </Link>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-[#25D366] text-xl" />
              <Link
                to="https://wa.me/01613776556"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#25D366] font-medium text-lg"
              >
                WhatsApp Contact
              </Link>
            </div>

            {/* Twitter (New Addition) */}
            <div className="flex items-center space-x-4">
              <FaTwitter className="text-[#1DA1F2] text-xl" />
              <Link
                to="https://twitter.com/pritomchakma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#1DA1F2] font-medium text-lg"
              >
                Twitter Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
