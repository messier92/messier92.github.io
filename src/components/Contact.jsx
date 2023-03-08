import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { CubeCanvas, EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { contactLinks } from '../constants';

const Contact = () => {
  return (
    <div className="xl:mt-2 xl:flex-row flex-col-reverse
    flex gap-12 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[1.75] p-8 rounded-2xl">
        <div className="mt-8 flex flex-col py-8 flex flex-col content-start">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>
        <a href="mailto:hanlong2102@gmail.com" className={styles.sectionSubText}>hanlong2102@gmail.com</a>
        <div className="flex flex-row flex-wrap justify-start">
          {contactLinks.map((contact) => (
          <div className="w-16 h-16" key={contact.name}>
            <CubeCanvas icon={contact.icon} link={contact.link}/>
        </div>
        ))}
        </div>
        </div>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[500px] h-[300px]">
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")