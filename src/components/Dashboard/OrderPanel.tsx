'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function OrderPanel() {
  return (
    <div className="bg-[#FF90B3] rounded-xl p-6 text-white flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-indigo-600 p-3 rounded-lg">
              <ArrowDownTrayIcon className="h-6 w-6 text-white" />
            </div>
          </motion.div>
        </div>
        <div>
          <h2 className="text-xl font-medium">Order your 3D prints instantly.</h2>
          <p className="text-gray-400 text-sm mt-1">Get instant shipping time and costs. Drag and drop your files to get started.</p>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium flex items-center"
      >
        Get an instant quote
        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.button>
    </div>
  );
} 