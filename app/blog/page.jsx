// components/Blog.jsx
import React from 'react';

const blogPosts = [
  {
    title: 'Top Books to Read in 2024',
    excerpt: 'Discover a collection of the top books you should read this year.',
    date: 'August 1, 2024',
  },
  {
    title: 'How to Choose the Right Book for You',
    excerpt: 'Tips on how to pick the book that suits your interests.',
    date: 'July 15, 2024',
  },
  {
    title: 'The History of Writing Through the Ages',
    excerpt: 'A journey through the history and evolution of writing.',
    date: 'June 30, 2024',
  },
];

const Blog = () => {
  return (
    <section className="my-20 container">
      <h2 className="text-2xl text-secondry bg-primary shadow w-[250px] mx-auto py-2 rounded-md mb-14 text-center">Our Blog</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="border p-6 rounded-lg bg-gray-400">
            <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
