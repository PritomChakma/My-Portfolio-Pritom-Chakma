import React, { useRef, useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaCheckCircle,
  FaRocket,
  FaGlobe,
  FaLightbulb
} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactMe = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_46deoup",
        "template_zwmsjym",
        form.current,
        "2s9WzqUr-65rWNrjM"
      )
      .then(
        () => {
          toast.success("🚀 Message sent successfully! I'll get back to you soon.");
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          toast.error(`❌ Failed to send: ${error.text}`);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const contactChannels = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "chakmapritom1@gmail.com",
      link: "mailto:chakmapritom1@gmail.com",
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400",
      hoverColor: "hover:shadow-orange-500/30"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+880 1613-776556",
      link: "tel:+8801613776556",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
      hoverColor: "hover:shadow-green-500/30"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Chattogram, Bangladesh",
      link: "https://maps.google.com",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      hoverColor: "hover:shadow-blue-500/30"
    },
    {
      icon: <FaGlobe />,
      title: "Timezone",
      value: "GMT+6 (Bangladesh)",
      link: null,
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      hoverColor: "hover:shadow-purple-500/30"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/pritomchakma/",
      color: "hover:bg-blue-600/20 hover:border-blue-500/50",
      iconColor: "text-blue-400"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/PritomChakma",
      color: "hover:bg-gray-800 hover:border-gray-600",
      iconColor: "text-gray-400"
    },
    {
      icon: <FaFacebook />,
      label: "Facebook",
      link: "https://web.facebook.com/pritom.chakma.716/",
      color: "hover:bg-blue-700/20 hover:border-blue-600/50",
      iconColor: "text-blue-500"
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      link: "https://twitter.com/pritomchakma",
      color: "hover:bg-cyan-600/20 hover:border-cyan-500/50",
      iconColor: "text-cyan-400"
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      link: "https://wa.me/01613776556",
      color: "hover:bg-green-600/20 hover:border-green-500/50",
      iconColor: "text-green-400"
    }
  ];

  return (
    <section className="relative py-24 px-10 bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden" id="contact">
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          style: {
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            color: '#fff',
            border: '1px solid #334155',
            backdropFilter: 'blur(10px)',
            padding: '16px 24px',
          },
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${15 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
            <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">Let's Connect</span>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
              Get In Touch
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <div>
            {/* Form Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-20 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-gray-900 to-black p-4 rounded-2xl border border-gray-800">
                  <SiMinutemailer className="text-3xl text-cyan-400" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Send Message</h2>
                <p className="text-gray-400">Fill out the form below and I'll get back to you ASAP</p>
              </div>
            </div>

            {/* Form Container */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Form Card */}
              <div className="relative bg-gradient-to-b from-gray-900/90 to-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 group-hover:border-cyan-500/30 transition-all duration-500">
                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 text-gray-300 font-medium">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                        <FaUser className="text-cyan-400" />
                      </div>
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 text-gray-300 font-medium">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <FaEnvelope className="text-blue-400" />
                      </div>
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 text-gray-300 font-medium">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                        <FaLightbulb className="text-purple-400" />
                      </div>
                      <span>Your Message</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSending || isSubmitted}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-3 group/btn ${
                      isSubmitted
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600'
                        : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500'
                    } ${(isSending || isSubmitted) ? 'cursor-not-allowed' : 'hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1'}`}
                  >
                    <div className="relative">
                      <FaPaperPlane className={`${isSubmitted ? 'hidden' : 'block'} group-hover/btn:translate-x-1 transition-transform duration-300`} />
                      <FaCheckCircle className={`${isSubmitted ? 'block' : 'hidden'}`} />
                    </div>
                    <span>
                      {isSending ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${isSending ? 'bg-white animate-ping' : isSubmitted ? 'bg-green-400' : 'bg-cyan-400'}`}></div>
                  </button>
                </form>
              </div>
            </div>

            {/* Response Time Indicator */}
            <div className="mt-8 flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Response Time:</span>
              <span className="text-gray-400">Typically within 24 hours</span>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Channels */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <FaRocket className="text-orange-400" />
                <span>Quick Connect</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {contactChannels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.link || '#'}
                    target={channel.link ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`group relative ${!channel.link && 'cursor-default'}`}
                  >
                    {/* Card Glow */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${channel.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Card */}
                    <div className={`relative bg-gradient-to-b from-gray-900/80 to-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 group-hover:border-gray-700/50 transition-all duration-500 ${channel.hoverColor} group-hover:-translate-y-1`}>
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${channel.color}`}>
                          <div className={`text-2xl ${channel.iconColor}`}>
                            {channel.icon}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-400 mb-1">
                            {channel.title}
                          </div>
                          <div className="text-white font-medium text-sm">
                            {channel.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect Socially</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl px-4 py-3 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                  >
                    <div className={`text-xl ${social.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white font-medium">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 text-center group-hover:border-orange-500/50 transition-all duration-500">
                <div className="text-5xl mb-4">💼</div>
                <h4 className="text-xl font-bold text-white mb-3">Looking for a Developer?</h4>
                <p className="text-gray-400 mb-6">
                  I'm currently available for freelance projects and full-time opportunities
                </p>
                <a
                  href="mailto:chakmapritom1@gmail.com"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20"
                >
                  <FaEnvelope />
                  Let's Discuss Your Project
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800/50">
          <div className="text-center">
            <p className="text-gray-500 mb-4">
              "Great things in business are never done by one person. They're done by a team of people."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
              <span className="text-gray-400 text-sm">- Steve Jobs</span>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactMe;