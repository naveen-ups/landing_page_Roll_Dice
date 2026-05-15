import { Play, Mail } from "lucide-react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section">
        <motion.div 
          className="contact-box"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div 
            className="contact-box__glow contact-box__glow--top"
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="contact-box__glow contact-box__glow--bottom"
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.9, 1, 0.9] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="contact-box__inner"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="eyebrow" style={{marginBottom:16}}>◆ LET'S CONNECT</div>
            <motion.h2 
              className="contact-title"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              READY TO PLAY?
            </motion.h2>
            <motion.p 
              className="contact-sub"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Have questions or want to collaborate? We're here to help — usually within 24 hours.
            </motion.p>
            <motion.div 
              className="contact-ctas"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,0,170,0.8)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={12} fill="currentColor"/>
                REACH OUT
              </motion.button>
              <motion.div 
                className="contact-email"
                whileHover={{ x: 8 }}
              >
                <Mail size={14}/>
                <span>INFO@DINGDING.COM</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
