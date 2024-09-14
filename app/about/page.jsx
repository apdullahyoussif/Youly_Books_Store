import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-400 text-secondary p-8 mt-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white">About Us</h1>
        <p className="mt-2 text-lg">
          Our online bookstore offers you a wide range of books for all tastes and preferences.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-white">Our Story</h2>
        <p className="mt-4">
          Our bookstore was founded with the aim of providing affordable, high-quality books for all book lovers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-white">Our Team</h2>
        <p className="mt-4">
          Our team consists of passionate readers who are always looking to provide the best service to our customers.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-white">Featured Books</h2>
        <p className="mt-4">
          Here you can find some of the best-selling books in our store.
        </p>
      </section>
    </div>
  );
};

export default About;
