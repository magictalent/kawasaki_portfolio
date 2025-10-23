import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gray-900 py-12 text-center">
      <h2 className="text-3xl font-semibold text-white mb-4">Contact</h2>
      <p className="text-gray-300 mb-4">andi.toptalent@gmail.com</p>
      <div className="flex justify-center gap-6 text-2xl text-blue-400">
        <a href="https://github.com/magictalent" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:andi.toptalent@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
