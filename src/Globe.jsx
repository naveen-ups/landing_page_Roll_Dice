import { motion } from "framer-motion";
import "./Globe.css";

const REGIONS = [
  { code:"AS", name:"Asia",          count:"18.2K", color:"#00F5FF" },
  { code:"EU", name:"Europe",        count:"12.7K", color:"#FF00AA" },
  { code:"ME", name:"Middle East",   count:"6.4K",  color:"#FFD700" },
  { code:"LA", name:"Latin America", count:"8.9K",  color:"#00FF88" },
  { code:"NA", name:"North America", count:"11.3K", color:"#FF6B35" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    x: 10,
    boxShadow: "0 0 30px rgba(0,245,255,0.5)",
  },
};

export default function Globe() {
  return (
    <section id="globe" className="globe-section">
      <div className="section-background globe-bg-img" />
      <div className="section">
        <div className="eyebrow">◆ WORLDWIDE</div>
        <motion.h2 
          className="section-title text-white-glow"
          initial={{ opacity: 0, rotateX: 30 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.6 }}
        >
          ACROSS THE GLOBE
        </motion.h2>
        <div className="neon-divider"/>
        <p className="section-sub">Built for global audiences, expanding across regions.</p>
  
        <div className="globe-body">
          {/* Globe visual */}
          <motion.div 
            className="globe-visual"
            initial={{ scale: 0, rotateZ: -90 }}
            whileInView={{ scale: 1, rotateZ: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div 
              className="globe-ring globe-ring--outer"
              style={{ x: "-50%", y: "-50%", left: "50%", top: "50%" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="globe-ring globe-ring--inner"
              style={{ x: "-50%", y: "-50%", left: "50%", top: "50%" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="globe-sphere"
              style={{ x: "-50%", y: "-50%", left: "50%", top: "50%" }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="globe-core">
                <motion.span 
                  className="globe-emoji"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🌍
                </motion.span>
                <div className="globe-scanline"/>
              </div>
            </motion.div>
            <motion.div 
              className="globe-equator"
              style={{ x: "-50%", y: "-50%", left: "50%", top: "50%" }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            {/* Orbiting dot wrapper */}
            <motion.div 
              className="orbit-wrapper"
              style={{ position: "absolute", inset: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="orbit-dot" />
            </motion.div>
          </motion.div>
  
          {/* Regions list */}
          <motion.div 
            className="globe-regions"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {REGIONS.map((r, i) => (
              <motion.div
                key={r.code}
                className="region-row"
                style={{"--rc": r.color}}
                variants={rowVariants}
                whileHover="hover"
              >
                <span className="rr-code">{r.code}</span>
                <span className="rr-name">{r.name}</span>
                <div className="rr-bar">
                  <motion.div
                    className="rr-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(parseFloat(r.count) / 18.2) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                  />
                </div>
                <motion.span 
                  className="rr-count"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  {r.count}
                </motion.span>
                <motion.span 
                  className="rr-dot"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
            <p className="globe-micro">AVAILABLE IN SELECTED INTERNATIONAL MARKETS</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
