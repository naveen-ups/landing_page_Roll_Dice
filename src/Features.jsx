import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import "./Features.css";

const FEATURES = [
  { icon:"⬆️", name:"LEVEL UP", desc:"Progress through levels by completing challenges.", color:"#00F5FF" },
  { icon:"💎", name:"CASHBACK", desc:"Earn rewards and get benefits as you keep playing.", color:"#FF00AA" },
  { icon:"⚡", name:"POWER HOUR", desc:"Recharge during special slots for extra coins.", color:"#FFD700" },
  { icon:"🔗", name:"SHARE & EARN", desc:"Invite friends and earn coins for every referral.", color:"#00FF88" },
  { icon:"📊", name:"GAME RECORDS", desc:"Track all your activity and performance in one place.", color:"#8B5CF6" },
  { icon:"🎨", name:"CUSTOMIZATION", desc:"Personalize your music and avatars your way.", color:"#FF6B35" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -30, rotateY: -90 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    x: 4,
    y: -2,
    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
  },
};

export default function Features() {
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1200);
  };

  return (
    <section id="features" className="features-section">
      <div className="section-background features-bg-img" />
      <div className="section">
        <div className="eyebrow">◆ PERFORMANCE</div>
        <motion.h2 
          className="section-title text-white-glow"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          BUILT FOR PERFORMANCE
        </motion.h2>
        <div className="neon-divider"/>
        <p className="section-sub">Everything you need for a smooth and reliable gaming experience.</p>
  
        <div className="features-layout">
          {/* Featured: Spin Wheel */}
          <motion.div 
            className="spin-card"
            initial={{ opacity: 0, scale: 0.8, rotateZ: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="spin-card__bg"/>
            <motion.div 
              className={`spin-wheel${spinning?" spinning":""}`}
              animate={spinning ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="wheel-outer">
                <div className="wheel-inner">
                  <div className="wheel-spokes">
                    {Array.from({length:12}).map((_,i)=>(
                      <motion.div 
                        key={i} 
                        className="spoke" 
                        style={{transform:`rotate(${i*30}deg)`}}
                        animate={spinning ? { opacity: [1, 0.3, 1] } : { opacity: 0.5 }}
                        transition={{ duration: 0.8, repeat: spinning ? 0 : Infinity }}
                      />
                    ))}
                  </div>
                  <motion.div 
                    className="wheel-center"
                    animate={spinning ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    ✦
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <h3 className="spin-card__title">SPIN.<br/>WIN.<br/>REPEAT.</h3>
            <p className="spin-card__desc">Hourly, daily, and weekly free coins keep the action alive — no deposit required.</p>
            <motion.button 
              className="btn btn-primary spin-card__btn"
              onClick={handleSpin}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,0,170,0.8)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={12} fill="currentColor"/>SPIN NOW
            </motion.button>
          </motion.div>
  
          {/* Feature grid */}
          <motion.div 
            className="feat-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {FEATURES.map((f,i)=>(
              <motion.div 
                key={i} 
                className="feat-card" 
                style={{"--fc":f.color}}
                variants={featureVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="feat-card__icon"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {f.icon}
                </motion.div>
                <div>
                  <h3>{f.name}</h3>
                  <p>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
