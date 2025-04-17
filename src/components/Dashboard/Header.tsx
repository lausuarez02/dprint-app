'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, BellIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Title */}
        <div>
          <h1 className="text-2xl font-medium text-white">Where everyone can easily make professional 3D prints</h1>
        </div>

        {/* Search and actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div> */}
            {/* <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 text-white placeholder-gray-400 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
            /> */}
          </div>

          {/* Action buttons */}
          <nav className="flex items-center space-x-3">
            <button className="p-2 text-gray-400 hover:text-white rounded-md">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white rounded-md">
              <ArrowDownTrayIcon className="h-6 w-6" />
            </button>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-medium">
                  LS
                </div>
              </button>
            </motion.div>
          </nav>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="px-6 pb-2">
        <nav className="flex space-x-6">
          <TabButton text="For you" active />
          {/* <TabButton text="Showcase" />
          <TabButton text="Community" />
          <TabButton text="Materials" />
          <TabButton text="Assets" /> */}
        </nav>
      </div>
    </header>
  );
}

function TabButton({ text, active = false }: { text: string; active?: boolean }) {
  return (
    <button className={`relative pb-2 text-sm font-medium ${active ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}>
      {text}
      {active && (
        <motion.div
          layoutId="tabIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"
        />
      )}
    </button>
  );
} 