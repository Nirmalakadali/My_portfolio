import { motion } from 'framer-motion';
import './About.scss';
import { Appwrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
const abouts = [
  { title: 'Programmer', description: 'I am a good logic designer', imgUrl: images.programmer },
  { title: 'Frontend developement', description: 'I am a good front-end developer', imgUrl: images.front_end },
  { title: 'Animations', description: 'I am a good presentation maker', imgUrl: images.presentation },
  { title: 'Explore', description: 'I am intrested in exploring new things', imgUrl: images.explore }

];
const About = () => {

  return (
    <>
      <h2 className="head-text">
        I know  &nbsp;
        <span>
          world is too big
        </span>
        <br />
        Means &nbsp;
        <span>
          Explore as fast as possible
        </span>
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + index}>
              <img src={about.imgUrl} alt={about.description} />
              <h2 className="bold-text" style={{ marginTop: 20 }}> {about.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}> {about.description}</p>

            </motion.div>
          ))}
        </div>
      </h2>
    </>
  )
}

export default Appwrap(MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg");