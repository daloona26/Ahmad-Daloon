import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:daloona26@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I'd love to hear from you. Feel free to reach
                out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-full dark:bg-primary-900">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-200" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    Email
                  </h4>
                  <a
                    href="mailto:daloona26@gmail.com"
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-200 dark:text-primary-400 dark:hover:text-primary-500"
                  >
                    daloona26@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone contact is commented out in your original, keeping it for completeness if you enable it later */}
              {/* <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-full dark:bg-primary-900">
                  <Phone className="w-6 h-6 text-primary-600 dark:text-primary-200" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+123 456 7890</p>
                </div>
              </div> */}

              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-full dark:bg-primary-900">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-200" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Available for remote work
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-100 p-3 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-all duration-200 transform hover:scale-110
                             dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-primary-900 dark:hover:text-primary-100"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 p-3 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-all duration-200 transform hover:scale-110
                             dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-primary-900 dark:hover:text-primary-100"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl dark:bg-gray-700 shadow-lg dark:shadow-xl transition-colors duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200
                             dark:bg-gray-800 dark:border-gray-600 dark:text-gray-50 dark:placeholder-gray-400 dark:focus:ring-primary-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200
                             dark:bg-gray-800 dark:border-gray-600 dark:text-gray-50 dark:placeholder-gray-400 dark:focus:ring-primary-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none
                             dark:bg-gray-800 dark:border-gray-600 dark:text-gray-50 dark:placeholder-gray-400 dark:focus:ring-primary-400"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2
                           dark:bg-primary-700 dark:hover:bg-primary-800 dark:text-primary-100"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
