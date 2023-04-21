import React from 'react'
 import { Tilt } from 'react-tilt'
 import {motion} from 'framer-motion'
 import {styles }from '../styles'
 import { services } from '../constants'
 import {fadeIn , textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

 const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
<p className={styles.sectionSubText}>
  Introduction
</p>
<h2 className={styles.sectionHeadText}>
  Overview
</h2>


   </motion.div>

   <motion.p variants={fadeIn("" ,"", 0.1,1)}
   className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
   >
  As a professional who specializes in web applications and 3D visuals, I bring a unique set of skills to the table. I am well-versed in the latest web development technologies, including designing, coding, testing, and deploying web applications. I also possess the expertise needed to create stunning 3D graphics and animations, which adds an extra level of depth and creativity to my portfolio.

With my proficiency in various programming languages, including HTML, CSS, JavaScript, and PHP, I can develop responsive and user-friendly web applications that are optimized for performance and user experience. I also have experience working with a wide range of web development frameworks and tools, such as Angular, React, Vue.js, and Node.js.

Moreover, my skills in 3D modeling and visualization techniques enable me to create detailed 3D models, textures, and lighting effects using software programs such as Autodesk Maya, Blender, or Cinema 4D. I specialize in 3D animation, motion graphics, and virtual reality, which can help to create engaging and visually appealing content.

As a creative and detail-oriented individual, I am committed to providing tailored solutions that meet the unique needs of my clients. With my ability to communicate effectively and understand client requirements, I can deliver projects that exceed expectations and leave a lasting impression. With my combination of skills, I am confident in my ability to provide innovative and effective solutions for any project that comes my way.

   </motion.p>

   <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
   
   </>
  )
}

export default SectionWrapper(About , "about")