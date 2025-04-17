'use client';

import { motion } from 'framer-motion';
import OrderPanel from './OrderPanel';
import ForYouSection from './ForYouSection';
import RecentFilesSection from './RecentFilesSection';

export default function MainContent() {
  return (
    <div className="space-y-8">
      {/* Order Panel */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <OrderPanel />
      </motion.div>

      {/* For You Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ForYouSection />
      </motion.div>

      {/* Recent Files Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <RecentFilesSection />
      </motion.div>
    </div>
  );
} 