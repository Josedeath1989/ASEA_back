import React from 'react';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueManifest from './components/ValueManifest';
import Solutions from './components/Solutions';
import VideoShowcase from './components/VideoShowcase';
import ServiceGallery from './components/ServiceGallery';
import TrustStats from './components/TrustStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        {/* Toast notifications container */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: '#0f172a',
              color: '#f8fafc',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
              borderRadius: '10px',
              fontSize: '14px',
              padding: '14px 20px',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#0f172a',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#0f172a',
              },
            },
          }}
        />

        <Header />
        <main>
          <Hero />
          <ValueManifest />
          <Solutions />
          <VideoShowcase />
          <ServiceGallery />
          <TrustStats />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
