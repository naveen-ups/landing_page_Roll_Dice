import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import "./AllGames.css";

const ALL_GAMES_LIST = [
  { id: 1, name: "MULTIPLAYER", desc: "Compete and play with others in real time", image: "/games/multiplayer-pvp.jpg", badge: "PVP", color: "#00F5FF", glow: "rgba(0,245,255,0.3)" },
  { id: 2, name: "SLOTS", desc: "Fast-paced spins with engaging gameplay", image: "/games/slots.jpg", badge: "777", color: "#FF00AA", glow: "rgba(255,0,170,0.3)" },
  { id: 3, name: "TABLE TOP", desc: "Skill-based and strategy-driven play", image: "/games/table-top.jpg", badge: "PRO", color: "#FFD700", glow: "rgba(255,215,0,0.3)" },
  { id: 4, name: "LOTTERY", desc: "Quick picks with instant outcomes", image: "/games/lottery.jpg", badge: "DRAW", color: "#00FF88", glow: "rgba(0,255,136,0.3)" },
  { id: 5, name: "E INSTANTS", desc: "Fast results, instant action", image: "/games/fast-action.jpg", badge: "FAST", color: "#FF6B35", glow: "rgba(255,107,53,0.3)" },
  { id: 6, name: "POKER PRO", desc: "High stakes poker tournaments", image: "/games/table-top.jpg", badge: "HOT", color: "#8B5CF6", glow: "rgba(139,92,246,0.3)" },
  { id: 7, name: "NEON ROULETTE", desc: "Cyberpunk styled roulette", image: "/games/multiplayer-pvp.jpg", badge: "NEW", color: "#00F5FF", glow: "rgba(0,245,255,0.3)" },
  { id: 8, name: "DRAGON SLOTS", desc: "Mythical jackpot slots", image: "/games/slots.jpg", badge: "JACKPOT", color: "#FFD700", glow: "rgba(255,215,0,0.3)" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AllGames({ navigateToHome, navigateToGameView }) {
  return (
    <section className="all-games-section">
      <div className="all-games-container">
        <motion.button 
          className="back-btn" 
          onClick={navigateToHome}
          whileHover={{ x: -5, color: "#00F5FF" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft size={20} />
          <span>BACK TO HOME</span>
        </motion.button>
        
        <motion.div 
          className="all-games-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">◆ GAME LIBRARY</div>
          <h1 className="section-title text-white-glow">ALL GAMES</h1>
          <div className="neon-divider" style={{ margin: "20px 0 40px 0" }}/>
        </motion.div>

        <motion.div 
          className="all-games-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {ALL_GAMES_LIST.map((g) => (
            <motion.div
              key={g.id}
              className="game-card"
              style={{
                "--gc": g.color,
                "--gg": g.glow,
              }}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => navigateToGameView(g)}
            >
              <div className="gc-image-wrapper">
                <img src={g.image} alt={g.name} className="gc-image" />
                <div className="gc-overlay" />
              </div>
              
              <div className="gc-topbar" />
              <div className="gc-badge">{g.badge}</div>
              
              <div className="gc-content">
                <h3 className="gc-name">{g.name}</h3>
                <p className="gc-desc">{g.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
