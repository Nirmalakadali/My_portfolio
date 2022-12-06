import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Appwrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import './Work.scss';
import { images } from '../../constants';


const works = [
  { title: 'ESW_Project', description: 'We did indoor air pollution monitoring project which measures indoor air molecules quantity and gives alert message if co2 is exceeded in that place and makes a phone call if there is any excessive temperature', name: 'Indoor Air Monitoring', imgUrl: images.airpollution, tags: 'ESW_Project', projectLink: 'https://github.com/Nirmalakadali/ESW_PROJECT', codeLink: 'https://github.com/Nirmalakadali/ESW_PROJECT' },
  { title: 'Shell', description: 'I implemented ubuntu shell using c from scratch and added extra features like auto completion and discover', name: 'Shell implementation', imgUrl: images.terminal, tags: 'Shell', projectLink: 'https://github.com/Nirmalakadali/Shell', codeLink: 'https://github.com/Nirmalakadali/Shell' },
  { title: 'Kernel', description: 'Me and my teammate implemented xv6 kernel by adding new features to the xv6 kernel like process scheduling and strace command working and finally we made it into a beautiful kernel by resolving all disperancies', name: 'xv6 Kernel', imgUrl: images.kernel, tags: 'Kernel', projectLink: 'https://github.com/Nirmalakadali/xv6-Kernel', codeLink: 'https://github.com/Nirmalakadali/xv6-Kernel' },

];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  // const [works, setWorks] = useState([]);
  const [filterWork, setFilterwork] = useState([]);
  useEffect(() => {

  }, [])
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterwork(works);
      }
      else {
        setFilterwork(works.filter((work) => work.tags.includes(item)))
      }
    })
  }
  return (
    <>
      <h2 className="head-text">
        My Popular <span>
          works
        </span>
        <br />
        
      </h2>
      <p>Visit my <a href="https://github.com/Nirmalakadali">github </a>to see my all projects</p>

      <div className="app__work-filter">

        {
          ['ESW_Project', 'Shell', 'Kernel', 'All'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
              {item}

            </div>
          ))
        }
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio">
        {
        (filterWork, works).map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex">
                <a href={work.projectLink} target="_blank" rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <div className="app__work-tag app__flex">

                <p className="p-text">{work.tags}</p>
              </div>
            </div>

          </div>
        ))}
      </motion.div>
    </>
  )
}

export default Appwrap(MotionWrap(Work, 'app__works'),
  'work',
  "app__primarybg");