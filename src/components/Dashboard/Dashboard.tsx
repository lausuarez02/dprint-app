'use client';

import { motion } from 'framer-motion';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 h-full"
      >
        <Sidebar />
      </motion.div>

      {/* Main content area */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 overflow-auto p-6"
        >
          <MainContent />
        </motion.div>
      </div>
    </div>
  );
} 