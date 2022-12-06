import { motion } from 'framer-motion';

import { Appwrap,MotionWrap} from '../../wrapper';
import './Skills.scss';
import { images } from '../../constants';
const skills = [
  { title: 'mysql', imgUrl: images.mysql },
  { title: 'ps', imgUrl: images.ps },
  { title: 'python', imgUrl: images.python },
  { title: 'html', imgUrl: images.html },
  { title: 'cpp', imgUrl: images.cpp },
  { title: 'css', imgUrl: images.css },
  { title: 'react', imgUrl: images.react },
  { title: 'bash', imgUrl: images.bash },
  { title: 'javascript', imgUrl: images.javascript },
  { title: 'git', imgUrl: images.git },


];
const Skills = () => {

  return (
    <>
      <h2 className="head-text">Skills </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
               
              >
                <img src={skill.imgUrl} alt={skill.title} />
              </div>
              <p className="p-text">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
      
      </div>
    </>
  );
};

export default Appwrap(MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__whitebg");