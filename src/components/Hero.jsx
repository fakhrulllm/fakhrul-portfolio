import image from "/public/foto.jpg"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
      <div className="flex flex-col items-center justify-center gap-10 text-white">

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={image} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover md:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[250px]" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}

          className="flex max-w-[600px] flex-col  items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-light md:text-5xl">Fakhrul Maulana</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-2xl font-light md:text-3xl">Web Developer</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">Fresh Graduate Web Developer with Fullstack IT bootcamp background. Proficient in React.js, Tailwind CSS, Node.js, Express.js, PostgreSQL,and Sequelize for end-to-end web application development. Adaptive, fast learner, and always ready to face new challenges.</p>
          <div className="mt-6 flex space-x-4">
            <a href="https://drive.google.com/file/d/1SdET9Mrhmj4ZJ4QQ2ThzYdCr4KrKChWR/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-pink-400 rounded-full p-4 text-sm text-stone-800 mb-10">Download Resume
            </a>
            <a href="https://drive.google.com/file/d/1Kg0l7Zdazt4a3FvoxwRKc7P0bM1hwpTg/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-400 to-blue-600 rounded-full p-4 text-sm text-stone-800 mb-10">Download Certified
            </a>
            <a href="https://drive.google.com/drive/folders/1cVRgFSJ8716dQlpesp5nKBlIEtCwWfds?usp=drive_link"
              target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-400 to-blue-600 rounded-full p-4 text-sm text-stone-800 mb-10">Download Content
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Hero
