import { motion } from "framer-motion";
import "./Journey.css";

const ACHIEVEMENTS = [
  { n:"01", text:"Growing user base" },
  { n:"02", text:"Expanding game collection" },
  { n:"03", text:"Continuous platform improvements" },
];

const UPCOMING = [
  { n:"01", text:"New game formats" },
  { n:"02", text:"Better reward systems" },
  { n:"03", text:"Upcoming features and upgrades" },
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
  hover: { x: 8, boxShadow: "0 0 20px rgba(0,0,0,0.4)" },
};

export default function Journey() {
  return (
    <section id="journey" className="journey-section">
      <div className="section-background journey-bg-img" />
      <motion.div 
        className="journey-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.div 
          className="journey-orb journey-orb--1"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="journey-orb journey-orb--2"
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>
      <div className="section">
        <div className="eyebrow">◆ OUR JOURNEY</div>
        <motion.h2 
          className="section-title text-white-glow"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GROWING EVERY DAY
        </motion.h2>
        <div className="neon-divider"/>
        <p className="section-sub">We are constantly improving and expanding to deliver better gaming experiences.</p>

        <div className="journey-grid">
          {/* Achievements */}
          <motion.div 
            className="jcard jcard--left"
            initial={{ opacity: 0, x: -50, rotateY: -90 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="jcard-head">
              <motion.div 
                className="jcard-icon" 
                style={{"--jc":"#FFD700"}}
                animate={{ scale: [1, 1.1, 1], rotateZ: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🏆
              </motion.div>
              <h3>ACHIEVEMENTS</h3>
            </div>
            <ul>
              {ACHIEVEMENTS.map((a, i) => (
                <motion.li 
                  key={a.n} 
                  className="jlist-item"
                  variants={itemVariants}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                >
                  <span className="jlist-num">{a.n}</span>
                  <span>{a.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Upcoming */}
          <motion.div 
            className="jcard jcard--right"
            initial={{ opacity: 0, x: 50, rotateY: 90 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="jcard-head">
              <motion.div 
                className="jcard-icon" 
                style={{"--jc":"#FF00AA"}}
                animate={{ scale: [1, 1.1, 1], rotateZ: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.div>
              <h3>WHAT'S NEXT</h3>
            </div>
            <ul>
              {UPCOMING.map((u, i) => (
                <motion.li 
                  key={u.n} 
                  className="jlist-item jlist-item--pink"
                  variants={itemVariants}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                >
                  <span className="jlist-num jlist-num--pink">{u.n}</span>
                  <span>{u.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p 
          className="journey-micro"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          – ALWAYS EVOLVING –
        </motion.p>
      </div>
    </section>
  );
}
