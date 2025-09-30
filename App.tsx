
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import News from './components/News';
import Results from './components/Results';
import About from './components/About';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const renderPage = useCallback(() => {
    switch (currentPage) {
      case Page.Home:
        return <Home />;
      case Page.News:
        return <News />;
      case Page.Results:
        return <Results />;
      case Page.About:
        return <About />;
      case Page.Contact:
        return <Contact />;
      default:
        return <Home />;
    }
  }, [currentPage]);

  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <Header setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
      <Footer />
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-110"
          aria-label="Open chatbot"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9.42 15.42L12 13.5l2.58 1.92L13.5 12.5l2.5-1.92L13.5 9.5l-1.08-2.92L9.42 9.5 7 10.58l2.5 1.92L8.42 15.42zM12 20c-.28 0-.54-.04-.8-.1l-1.74.87c-.38.19-.82-.13-.74-.55l.25-1.4C8.2 18.25 7.5 17.18 7.5 16H9.5c.34 0 .66.17.85.44L11.2 18l.8-1.56c-.19-.06-.39-.1-.59-.14l-1.13-.28c-.41-.1-.68-.51-.58-.92l.4-1.63c.1-.41.51-.68.92-.58l1.13.28c1.07.26 1.8 1.28 1.8 2.42V20h-2z"/>
          </svg>
        </button>
        {isChatbotOpen && <Chatbot closeChatbot={() => setIsChatbotOpen(false)} />}
      </div>
    </div>
  );
};

export default App;
