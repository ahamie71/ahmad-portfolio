import React from 'react'
import { motion } from 'framer-motion'
import { skillsCategories } from '../data/skillsCategories.js'

export default function Skills() {

  const getSkillLogo = (name) => {
    const map = {
      'PHP': '/icons/php.svg',
      'Symfony': '/icons/symfony.svg',
      'React.js': '/icons/react.svg',
      'Node.js': '/icons/nodejs.svg',
      'JavaScript': '/icons/javascript.svg',
      'Python': '/icons/python.svg',
      'Figma': '/icons/figma.svg',
      'HTML5/CSS': '/icons/html5.svg',
      'Bootstrap 5': '/icons/bootstrap.svg',
      'TWIG': null,
      'PostgreSQL': '/icons/postgresql.svg',
      'MongoDB': '/icons/mongodb.svg',
      'MySQL': '/icons/mysql.svg',
      'MariaDB': '/icons/mariadb.svg',
      'phpMyAdmin': null,
      'OVHcloud': null,
      'Git, GitHub': '/icons/git.svg',
      'JIRA': '/icons/jira.svg',
      'UML': null,
      'Zoom': null,
      'PyCharm': '/icons/pycharm.svg',
      'Postman': '/icons/postman.svg',
      'PhpStorm': '/icons/phpstorm.svg',
      'Visual Studio': '/icons/visualstudio.svg',
      'Français': null,
      'Anglais': null,
      'Arabe': null,
    }
    return map[name] || null
  }

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-4 bg-white text-black dark:bg-black dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8"
      >
        Compétences
      </motion.h2>
      
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillsCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg border border-yellow-500/10 hover:border-yellow-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white">
                  {cat.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {cat.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors group"
                  >
                    <div className="flex-shrink-0">
                      {getSkillLogo(skill.name) ? (
                        <img
                          src={getSkillLogo(skill.name)}
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-yellow-400/10 dark:bg-yellow-400/20 flex items-center justify-center text-sm font-bold text-yellow-600 dark:text-yellow-400">
                          {skill.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(skill.level / 5) * 100}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                        />
                      </div>
                      <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 min-w-[2rem]">
                        {skill.level}/5
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


