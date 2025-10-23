import React from 'react';

const skills = [
  'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Python', 'Docker',
  'GraphQL', 'AWS', 'Flutter', 'React Native', 'MongoDB', 'Tailwind CSS'
];

const Skills = () => {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-white text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 py-3 rounded shadow text-gray-300">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
