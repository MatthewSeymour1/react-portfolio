import { motion } from 'motion/react';

export default function About() {
    return (
        <motion.section id="about" className="py-20 sm:py-32 border-t border-b border-border " initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1}} transition={{duration: 1}} >
          <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-light">About Me</h2>

            <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              <p>
                I'm Matthew Seymour, a passionate Frontend Developer dedicated to crafting engaging and intuitive digital experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and user-friendly web applications using modern frameworks like React and Tailwind CSS.
              </p>
              <p>
                My journey into web development began with a fascination for how technology can enhance user experiences. Over the years, I've honed my skills through various projects, both personal and collaborative, always striving to stay updated with the latest industry trends and best practices.
              </p>
              <p>
                Beyond coding, I have a keen eye for design and a deep appreciation for aesthetics, which allows me to create visually appealing interfaces that resonate with users. I'm committed to continuous learning and growth, always eager to take on new challenges and contribute to impactful projects.
              </p>
            </div>
          </div>
        </motion.section>
    );
}