import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./GameShowcase.css";

const SHOWCASE_GAMES = [
  { id: 1, title: "Quick Hit Pirate", image: "/games/multiplayer-pvp.jpg", category: "Action", rtp: "96.5%" },
  { id: 2, title: "Gold Standard Jackpots", image: "/games/slots.jpg", category: "Slots", rtp: "97.2%" },
  { id: 3, title: "Cash Machine Top Dollar", image: "/games/table-top.jpg", category: "Table", rtp: "98.1%" },
  { id: 4, title: "Rock Climber", image: "/games/lottery.jpg", category: "Adventure", rtp: "96.8%" },
  { id: 5, title: "Hufen Mystique", image: "/games/fast-action.jpg", category: "Fantasy", rtp: "97.5%" },
];

export default function GameShowcase({ navigateToGameView }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SHOWCASE_GAMES.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SHOWCASE_GAMES.length) % SHOWCASE_GAMES.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="game-showcase">
      <div className="section-background popular-games-bg-img" />
      <div className="showcase-container">
        <h2 className="showcase-title">POPULAR GAMES</h2>
        <p className="showcase-subtitle">Experience our most played and highest-rated games</p>

        <div className="showcase-carousel">
          {/* Main Display */}
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="showcase-slide"
          >
            <div className="showcase-game-card" onClick={() => navigateToGameView(SHOWCASE_GAMES[current])} style={{cursor: 'pointer'}}>
              <div className="showcase-image-wrapper">
                <img src={SHOWCASE_GAMES[current].image} alt={SHOWCASE_GAMES[current].title} />
                <div className="showcase-overlay" />
              </div>
              <div className="showcase-info">
                <h3>{SHOWCASE_GAMES[current].title}</h3>
                <div className="showcase-meta">
                  <span className="category">{SHOWCASE_GAMES[current].category}</span>
                  <span className="rtp">RTP: {SHOWCASE_GAMES[current].rtp}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            className="nav-btn prev"
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            className="nav-btn next"
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Thumbnail Gallery */}
        <div className="showcase-thumbnails">
          {SHOWCASE_GAMES.map((game, idx) => (
            <motion.button
              key={game.id}
              className={`thumbnail ${idx === current ? "active" : ""}`}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={game.image} alt={game.title} />
              <div className="thumbnail-overlay" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
