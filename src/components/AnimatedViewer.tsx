'use client';

import { motion } from 'framer-motion';

export default function AnimatedViewer() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full"
    >
    </motion.div>
  );
} 