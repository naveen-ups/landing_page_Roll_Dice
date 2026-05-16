import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./GameShowcase.css";

const SHOWCASE_GAMES = [
  { id: 1, title: "Quick Hit Pirate", image: "/games/multiplayer-pvp.jpg", category: "Action", rtp: "96.5%", color: "#00F5FF", glow: "rgba(0,245,255,0.3)" },
  { id: 2, title: "Gold Standard Jackpots", image: "/games/slots.jpg", category: "Slots", rtp: "97.2%", color: "#FF00AA", glow: "rgba(255,0,170,0.3)" },
  { id: 3, title: "Cash Machine Top Dollar", image: "/games/table-top.jpg", category: "Table", rtp: "98.1%", color: "#FFD700", glow: "rgba(255,215,0,0.3)" },
  { id: 4, title: "Rock Climber", image: "/games/lottery.jpg", category: "Adventure", rtp: "96.8%", color: "#00FF88", glow: "rgba(0,255,136,0.3)" },
  { id: 5, title: "Hufen Mystique", image: "/games/fast-action.jpg", category: "Fantasy", rtp: "97.5%", color: "#FF6B35", glow: "rgba(255,107,53,0.3)" },
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

export default function GameShowcase({ navigateToGameView }) {
  const [hoveredId, setHoveredId] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="game-showcase">
      <div className="section-background popular-games-bg-img" />
      <div className="showcase-container">
        <h2 className="showcase-title">POPULAR GAMES</h2>
        <p className="showcase-subtitle">Experience our most played and highest-rated games</p>

        <div className="showcase-carousel-wrapper">
          <button className="nav-btn prev" onClick={() => scroll("left")}>
            <ChevronLeft size={24} />
          </button>

          <motion.div 
            className="showcase-grid"
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {SHOWCASE_GAMES.map((game) => (
              <motion.div
                key={game.id}
                className="showcase-game-card"
                style={{
                  "--gc": game.color,
                  "--gg": game.glow,
                }}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredId(game.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => navigateToGameView(game)}
              >
                {/* Game Image Background */}
                <div className="showcase-image-wrapper">
                  <img src={game.image} alt={game.title} className="showcase-image" />
                  <div className="showcase-overlay" />
                </div>

                {/* Top glow bar */}
                <motion.div 
                  className="showcase-topbar"
                  animate={hoveredId === game.id ? { opacity: 1, boxShadow: `0 0 40px ${game.color}` } : { opacity: 0.3 }}
                />
                
                {/* Badge */}
                <motion.div 
                  className="showcase-badge"
                  animate={hoveredId === game.id ? { scale: 1.15, rotateZ: -8 } : { scale: 1, rotateZ: 0 }}
                >
                  {game.category}
                </motion.div>
                
                {/* Content Wrapper */}
                <div className="showcase-info">
                  <h3 className="showcase-name">{game.title}</h3>
                  <div className="showcase-meta">
                    <span className="rtp">RTP: {game.rtp}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <button className="nav-btn next" onClick={() => scroll("right")}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
