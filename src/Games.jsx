import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Games.css";

const GAMES = [
  { id:1, name:"MULTIPLAYER", desc:"Compete and play with others in real time", image:"/games/multiplayer-pvp.jpg", badge:"PVP", color:"#00F5FF", glow:"rgba(0,245,255,0.3)" },
  { id:2, name:"SLOTS", desc:"Fast-paced spins with engaging gameplay", image:"/games/slots.jpg", badge:"777", color:"#FF00AA", glow:"rgba(255,0,170,0.3)" },
  { id:3, name:"TABLE TOP", desc:"Skill-based and strategy-driven play", image:"/games/table-top.jpg", badge:"PRO", color:"#FFD700", glow:"rgba(255,215,0,0.3)" },
  { id:4, name:"LOTTERY", desc:"Quick picks with instant outcomes", image:"/games/lottery.jpg", badge:"DRAW", color:"#00FF88", glow:"rgba(0,255,136,0.3)" },
  { id:5, name:"E INSTANTS", desc:"Fast results, instant action", image:"/games/fast-action.jpg", badge:"FAST", color:"#FF6B35", glow:"rgba(255,107,53,0.3)" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 30 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -15,
    scale: 1.05,
    rotateZ: 2,
    transition: { duration: 0.3 },
  },
};

export default function Games({ navigateToAllGames, navigateToGameView }) {
  const [hoveredId, setHoveredId] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="games" className="section games-section">
      <div className="eyebrow">◆ GAME UNIVERSE</div>
      <motion.h2 
        className="section-title text-white-glow"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        EXPLORE OUR<br/>GAMES
      </motion.h2>
      <div className="neon-divider"/>
      <p className="section-sub">A wide range of games designed for every type of player.</p>

      <div className="games-carousel-wrapper">
        <button className="carousel-btn left" onClick={() => scroll("left")}>
          <ChevronLeft size={24} />
        </button>

        <motion.div 
          className="games-grid"
          ref={scrollRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {GAMES.map((g, idx) => (
          <motion.div
            key={g.id}
            className="game-card"
            style={{
              "--gc": g.color,
              "--gg": g.glow,
            }}
            variants={cardVariants}
            whileHover="hover"
            onMouseEnter={() => setHoveredId(g.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => navigateToGameView(g)}
          >
            {/* Game Image Background */}
            <div className="gc-image-wrapper">
              <img src={g.image} alt={g.name} className="gc-image" />
              {/* Overlay gradient */}
              <div className="gc-overlay" />
            </div>

            {/* Particle effect on hover */}
            {hoveredId === g.id && (
              <>
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="particle"
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{ x: (Math.random() - 0.5) * 120, y: -120, opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                      position: "absolute",
                      width: 6,
                      height: 6,
                      background: g.color,
                      borderRadius: "50%",
                      left: "50%",
                      top: "50%",
                      zIndex: 10,
                    }}
                  />
                ))}
              </>
            )}

            {/* Top glow bar */}
            <motion.div 
              className="gc-topbar"
              animate={hoveredId === g.id ? { opacity: 1, boxShadow: `0 0 40px ${g.color}` } : { opacity: 0.3 }}
            />
            
            {/* Badge */}
            <motion.div 
              className="gc-badge"
              animate={hoveredId === g.id ? { scale: 1.15, rotateZ: -8 } : { scale: 1, rotateZ: 0 }}
            >
              {g.badge}
            </motion.div>
            
            {/* Content Wrapper */}
            <div className="gc-content">
              {/* Game Info - Name and Desc only */}
              <h3 className="gc-name">{g.name}</h3>
              <p className="gc-desc">{g.desc}</p>
            </div>
          </motion.div>
        ))}
        </motion.div>

        <button className="carousel-btn right" onClick={() => scroll("right")}>
          <ChevronRight size={24} />
        </button>
      </div>

      <motion.div 
        style={{marginTop:50}}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button 
          className="btn btn-primary" 
          style={{fontSize:"0.78rem"}}
          onClick={navigateToAllGames}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,0,170,0.8)" }}
          whileTap={{ scale: 0.95 }}
        >
          VIEW ALL GAMES →
        </motion.button>
      </motion.div>
    </section>
  );
}
