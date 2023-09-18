import React from 'react'
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
const abouts = [
  { title: 'Web development', description: 'I am a good web developer', imageUrl: images.about01 },
  { title: 'Frontend Development', description: 'I am a good web developer', imageUrl: images.about02 },
  { title: 'UI/UX Design', description: 'I am a good web developer', imageUrl: images.about03 },
  { title: 'Web Animation', description: 'I am a good web developer', imageUrl: images.about04 },
]
function About() {
  return (
    <>
      <h2 className='head-text'>
        I know That <span>Good Development</span> <br /> means <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}>
            <img src={about.imageUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='bold-text' style={{ marginTop: 20 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About