'use client';

import { motion } from 'framer-motion';

interface AppCardProps {
  title: string;
  description: string;
  color: string;
  icon: string;
  isNew?: boolean;
}

export default function AppCard({ title, description, color, icon, isNew }: AppCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-xl overflow-hidden h-full cursor-pointer"
    >
      <div className={`${color} p-6 relative h-32 flex items-center justify-center`}>
        {isNew && (
          <div className="absolute top-2 left-2 bg-white text-xs font-bold text-gray-900 px-2 py-1 rounded-md">
            NEW
          </div>
        )}
        <span className="text-4xl">{icon}</span>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-white text-sm">{title}</h3>
        <p className="text-gray-400 text-xs mt-1">{description}</p>
      </div>
    </motion.div>
  );
} 