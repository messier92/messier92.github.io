import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  return (
    <div className="xl:mt-2 xl:flex-row flex-col-reverse
    flex gap-12 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[1.75] p-8 rounded-2xl">
        <div className="mt-8 flex flex-col py-15">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>
        <a href="mailto:hanlong2102@gmail.com" className={styles.sectionSubText}>hanlong2102@gmail.com</a>
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