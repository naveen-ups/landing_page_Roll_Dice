import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock } from "lucide-react";
import "./LoginModal.css";

export default function LoginModal({ onClose, gameTitle }) {
  return (
    <motion.div 
      className="login-modal__overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="login-modal__container"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="login-modal__close" onClick={onClose}>
          <X size={24} />
        </button>

        <img src="/logo.png" alt="Rolling Dice" className="login-modal__logo" />

        <h2 className="login-modal__title">Sign in to play {gameTitle}</h2>
        <p className="login-modal__subtitle">Enter your account to continue</p>

        <form className="login-modal__form" onSubmit={(e) => e.preventDefault()}>
          <div className="login-modal__input-group">
            <input 
              type="text" 
              placeholder="Input Account" 
              className="login-modal__input" 
            />
            <Mail className="login-modal__icon" size={20} />
          </div>

          <div className="login-modal__input-group">
            <input 
              type="password" 
              placeholder="Input Password" 
              className="login-modal__input" 
            />
            <Lock className="login-modal__icon" size={20} />
          </div>

          <div className="login-modal__options">
            <input type="checkbox" id="remember" className="login-modal__checkbox" />
            <label htmlFor="remember">REMEMBER ME</label>
          </div>

          <button type="submit" className="login-modal__submit">
            LOG IN
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
