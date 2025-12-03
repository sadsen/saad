import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail, Linkedin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      
      {/* Background Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-400/20 dark:bg-emerald-600/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-emerald-500 shadow-xl shadow-emerald-500/20 bg-white dark:bg-slate-800">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Saad Fuhaid"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="flex flex-col items-center gap-2 mb-6">
            <span className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-300 dark:via-teal-200 dark:to-cyan-400 pb-2 filter drop-shadow-sm">
              سعد فهيد
            </span>

            <span className="text-xl md:text-3xl font-bold text-slate-600 dark:text-slate-500/80 tracking-[0.2em] uppercase">
              Saad Fuhaid
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium mb-8">
            {t.hero.role}
          </h2>

          {/* Bio */}
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
            {t.hero.bio}
          </p>

          {/* Location */}
          <div className="flex justify-center gap-4 mb-10 text-slate-600 dark:text-slate-400 text-sm">
            <span className="flex items-center gap-1">
              <MapPin size={16} /> {t.hero.location}
            </span>
          </div>

          {/* Contact Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/s3dsu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-none group-hover:border-[#0077b5] group-hover:shadow-[#0077b5]/30 transition-all">
                <Linkedin size={28} className="text-slate-500 dark:text-slate-400 group-hover:text-[#0077b5] transition-colors" />
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-500 group-hover:text-[#0077b5] transition-colors font-medium">
                {t.hero.linkedin}
              </span>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:sa888e@gmail.com"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-none group-hover:border-[#ea4335] group-hover:shadow-[#ea4335]/30 transition-all">
                <Mail size={28} className="text-slate-500 dark:text-slate-400 group-hover:text-[#ea4335] transition-colors" />
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-500 group-hover:text-[#ea4335] transition-colors font-medium">
                {t.hero.email}
              </span>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:0571441777"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-none group-hover:border-emerald-500 group-hover:shadow-emerald-500/30 transition-all">
                <Phone size={28} className="text-slate-500 dark:text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-500 group-hover:text-emerald-500 transition-colors font-medium dir-ltr">
                {t.hero.phone}
              </span>
            </motion.a>
          </div>

          {/* CV Download Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            target="_blank"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-emerald-600/30 transition-all inline-block"
          >
            {t.hero.resumeBtn}
          </motion.a>
        </motion.div>
      </div>

      {/* Animated Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500"
      >
        <ArrowDown size={32} />
      </motion.div>

    </section>
  );
};

export default Hero;
