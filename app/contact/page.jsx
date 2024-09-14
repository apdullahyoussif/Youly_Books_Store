import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-300 to-gray-400 text-secondary p-8 mt-16">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold text-primary">Contact Us</h1>
      </header>

      <form className="flex flex-col max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button className="w-full p-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition duration-300">
          Send Message
        </button>
      </form>

      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-primary">Contact Information</h2>
        <p className="mt-4 text-lg ">
          Email: <a href="mailto:ap9ullah27@gmail.com" className="hover:text-gray-300 underline">ap9ullah27@gmail.com</a>
          <br />
          Phone: <a href="tel:01069155929" className="hover:text-gray-300 underline">01069155929</a>
        </p>
      </section>
    </div>
  );
};

export default Contact;
