
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsTicker from './components/NewsTicker';
import HomePage from './components/pages/HomePage';
import NewsPage from './components/pages/NewsPage';
import ResultsPage from './components/pages/ResultsPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (activePage) {
      case Page.Home:
        return <HomePage onNavigate={setActivePage} />;
      case Page.News:
        return <NewsPage />;
      case Page.Results:
        return <ResultsPage />;
      case Page.About:
        return <AboutPage />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onNavigate={setActivePage} activePage={activePage} />
      <NewsTicker />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
