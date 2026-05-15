import { motion } from "framer-motion";
import { ArrowLeft, Play, Star, Users, Trophy } from "lucide-react";
import "./GameView.css";

export default function GameView({ game, onBack }) {
  if (!game) return null;

  const getCategoryBackground = (game) => {
    const name = (game.name || game.title || '').toLowerCase();
    
    if (name.includes('slot')) {
      return 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80';
    }
    if (name.includes('table') || name.includes('poker')) {
      return 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80';
    }
    if (name.includes('roulette')) {
      return 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80';
    }
    if (name.includes('lottery') || name.includes('instant')) {
      return 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80';
    }
    return 'https://images.unsplash.com/photo-1623113552230-66708307d4b4?auto=format&fit=crop&q=80';
  };

  const bgImage = getCategoryBackground(game);

  return (
    <section className="game-view-section">
      <div 
        className="game-view-bg" 
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="game-view-overlay" />

      <div className="game-view-content">
        <motion.button 
          className="back-btn" 
          onClick={onBack}
          whileHover={{ x: -5, color: "#00F5FF" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft size={20} />
          <span>BACK TO GAMES</span>
        </motion.button>

        <div className="game-view-main">
          <motion.div 
            className="game-view-image-container"
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={game.image || game.image_url} alt={game.title || game.name} className="game-view-image" />
            <div className="game-view-image-glow" style={{ background: game.color || '#00F5FF' }} />
          </motion.div>

          <motion.div 
            className="game-view-details"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="eyebrow">◆ {game.category || game.badge || 'GAME INFO'}</div>
            <h1 className="game-view-title">{game.title || game.name}</h1>
            <p className="game-view-desc">
              {game.desc || "Experience the ultimate thrill with cutting-edge graphics and rewarding gameplay mechanics. Join thousands of players in this top-rated game."}
            </p>

            <div className="game-view-stats">
              <div className="stat-box">
                <Users size={20} className="stat-icon" />
                <span>PLAYERS</span>
                <strong>24,500+</strong>
              </div>
              <div className="stat-box">
                <Trophy size={20} className="stat-icon" />
                <span>JACKPOT</span>
                <strong>$1.2M</strong>
              </div>
              <div className="stat-box">
                <Star size={20} className="stat-icon" />
                <span>RATING</span>
                <strong>4.9/5</strong>
              </div>
            </div>

            <motion.button 
              className="btn btn-primary play-huge-btn"
              style={{ '--btn-color': game.color || '#FF00AA' }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${game.color || '#FF00AA'}` }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={24} fill="currentColor"/>
              PLAY GAME NOW
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
