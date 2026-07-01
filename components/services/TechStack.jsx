"use client";
import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Framework',
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Spring Boot', 'Django']
  },
  {
    title: 'UI/UX',
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'Tailwind CSS', 'Framer Motion', 'Storybook']
  },
  {
    title: 'Database',
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB']
  },
  {
    title: 'Cloud & DevOps',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform']
  }
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {techCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
        >
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
            <div className="w-10 h-10 rounded-lg bg-[#06101F] border border-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#22D3EE]">
                {category.title === 'Framework' ? 'code_blocks' :
                 category.title === 'UI/UX' ? 'design_services' :
                 category.title === 'Database' ? 'database' : 'cloud'}
              </span>
            </div>
            <h3 className="text-white font-title-lg text-[18px] font-bold">{category.title}</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {category.technologies.map(tech => (
              <span 
                key={tech} 
                className="px-3 py-1.5 bg-[#06101F]/80 border border-white/10 rounded-md text-white/80 font-body-sm text-[13px] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
