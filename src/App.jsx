import './index.css';
import Navbar   from './Navbar';
import Hero     from './Hero';
import Games    from './Games';
import GameShowcase from './GameShowcase';
import Journey  from './Journey';
import Globe    from './Globe';
import Features from './Features';
import Contact  from './Contact';
import Footer   from './Footer';
import AllGames from './AllGames';
import GameView from './GameView';
import LoginModal from './LoginModal';
import { useState } from 'react';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedGame, setSelectedGame] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const navigateToAllGames = () => {
    setCurrentView('all-games');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToGameView = (game) => {
    setSelectedGame(game);
    setCurrentView('game-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedGame(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [selectedGameForLogin, setSelectedGameForLogin] = useState(null);

  const openLoginModal = (game) => {
    setSelectedGameForLogin(game);
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    setSelectedGameForLogin(null);
  };

  return (
    <div style={{background:'#05020F'}}>
      <Navbar />
      {currentView === 'home' && (
        <>
          <Hero navigateToAllGames={navigateToAllGames} />
          <Games 
            navigateToAllGames={navigateToAllGames} 
            navigateToGameView={openLoginModal} 
          />
          <GameShowcase navigateToGameView={openLoginModal} />
          <Journey />
          <Globe />
          <Features />
          <Contact />
        </>
      )}
      {currentView === 'all-games' && (
        <AllGames 
          navigateToHome={navigateToHome} 
          navigateToGameView={openLoginModal} 
        />
      )}
      {currentView === 'game-view' && selectedGame && (
        <GameView game={selectedGame} onBack={navigateToAllGames} />
      )}
      <Footer/>
      
      {isLoginModalOpen && (
        <LoginModal 
          onClose={closeLoginModal} 
          gameTitle={selectedGameForLogin?.name || selectedGameForLogin?.title || "Game"}
        />
      )}
    </div>
  );
}
