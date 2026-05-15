import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero({ navigateToAllGames }) {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__inner">
        <motion.div 
          className="hero__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src="/logo1.png" 
            alt="Rolling Dice Logo" 
            className="hero__logo-large"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.h1 
            className="hero__title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Play Compete Win Real
          </motion.h1>

          <motion.p 
            className="hero__subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            All your favorite gaming experiences in one powerful platform — 
            smooth, engaging, and built for performance.
          </motion.p>

          <motion.button 
            className="btn-browse"
            onClick={navigateToAllGames}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            BROWSE GAMES
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
