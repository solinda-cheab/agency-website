import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        animate={{ scale: [0.95, 1, 0.95] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center"
      >
        <div className="h-12 w-12 rounded bg-indigo-600 shadow-lg shadow-indigo-500/50" />
        <h2 className="mt-4 font-mono text-sm tracking-widest text-slate-400 uppercase animate-pulse">
          Initializing Engine...
        </h2>
      </motion.div>
    </motion.div>
  );
}