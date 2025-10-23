import React from 'react';

const projects = [
  {
    title: 'Flight Delay Prediction',
    description: 'A machine learning model for predicting flight delays.',
    stack: 'Python, AWS SageMaker',
  },
  {
    title: 'Marketplace Platform',
    description: 'A SaaS platform with AI-based recommendation engine.',
    stack: 'React, Next.js, Node.js',
  },
  {
    title: 'Companion App',
    description: 'Mobile app providing smart message suggestions.',
    stack: 'React Native, NLP',
  },
  {
    title: 'Loan Management System',
    description: 'Digital tool for managing loans ensuring compliance.',
    stack: 'React, Node.js',
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 py-12 px-4">
      <h2 className="text-3xl font-semibold text-white text-center mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <p className="text-sm text-gray-400 mt-1">{project.stack}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
