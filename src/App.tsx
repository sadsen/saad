import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import AIChatWidget from './components/AIChatWidget';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { Languages, Moon, Sun, Monitor, ArrowUp } from 'lucide-react';

// Smooth scroll
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.offsetTop - 70;
  window.scrollTo({ top, behavior: 'smooth' });
};

// THEME TOGGLE
const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };
  const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-full border border-slate-200 dark:border-slate-700 
      hover:bg-slate-100 dark:hover:bg-slate-800 
      text-slate-600 dark:text-emerald-400 transition-all"
    >
      <Icon size={16} />
    </button>
  );
};

// BACK TO TOP
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', show);
    return () => window.removeEventListener('scroll', show);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white 
      p-3 rounded-full shadow-lg z-50 transition-all"
    >
      <ArrowUp size={22} />
    </button>
  );
};

// MAIN CONTENT
const AppContent: React.FC = () => {
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen 
      text-slate-900 dark:text-slate-100">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-slate-900/80 
        backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50">

        <div className="container mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => scrollToSection('home')}
            className="text-xl font-black text-slate-800 dark:text-white 
            tracking-tighter cursor-pointer"
          >
            SAAD<span className="text-emerald-600 dark:text-emerald-500">.FUHAID</span>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex gap-8 text-sm font-medium 
            text-slate-600 dark:text-slate-400">

            <button onClick={() => scrollToSection('home')}
              className="hover:text-emerald-600 dark:hover:text-emerald-400">الرئيسية</button>

            <button onClick={() => scrollToSection('experience')}
              className="hover:text-emerald-600 dark:hover:text-emerald-400">الخبرات</button>

            <button onClick={() => scrollToSection('projects')}
              className="hover:text-emerald-600 dark:hover:text-emerald-400">المشاريع</button>

            <button onClick={() => scrollToSection('certifications')}
              className="hover:text-emerald-600 dark:hover:text-emerald-400">الشهادات</button>

            <button onClick={() => scrollToSection('contact')}
              className="hover:text-emerald-600 dark:hover:text-emerald-400">تواصل معي</button>

          </div>

          {/* TOP BAR TOOLS */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border 
                border-slate-200 dark:border-slate-700 
                hover:bg-slate-100 dark:hover:bg-slate-800 
                text-xs font-bold text-emerald-600 dark:text-emerald-400"
            >
              <Languages size={14} />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>
          </div>

        </div>
      </nav>

      {/* PAGE SECTIONS WITH IDs */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certifications">
          <Certifications />
        </section>
      </main>

      <section id="contact">
        <Footer />
      </section>

      <AIChatWidget />

      {/* BACK TO TOP */}
      <BackToTop />
    </div>
  );
};

// PROVIDERS WRAPPER
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
