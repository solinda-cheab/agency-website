import { motion } from 'framer-motion';

// Reusable Shimmer effect component for maximum performance and clean markup
const ShimmerBlock = ({ className }) => {
  return (
    <div className={`relative overflow-hidden bg-slate-200 rounded-lg ${className}`}>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
          ease: 'linear',
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
      />
    </div>
  );
};

export default function WebsiteSkeleton() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full bg-slate-50/50 flex flex-col"
    >
      {/* 1. Navbar Skeleton (Matches your responsive redesign layout) */}
      <header className="w-full bg-white border-b border-slate-100 h-20 px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Mock Logo */}
        <div className="flex items-center gap-3">
          <ShimmerBlock className="w-8 h-8 rounded-md" />
          <ShimmerBlock className="w-24 h-5 hidden sm:block" />
        </div>
        
        {/* Mock Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ShimmerBlock className="w-14 h-4" />
          <ShimmerBlock className="w-16 h-4" />
          <ShimmerBlock className="w-16 h-4" />
          <ShimmerBlock className="w-20 h-4" />
        </div>

        {/* Mock Action Button */}
        <ShimmerBlock className="w-28 h-10 rounded-full" />
      </header>

      {/* 2. Main Body Content Skeleton */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Hero Section Placeholder */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <ShimmerBlock className="w-32 h-5 rounded-full" />
          <ShimmerBlock className="w-full h-12 sm:h-16 rounded-xl" />
          <ShimmerBlock className="w-3/4 h-6 rounded-lg" />
          <div className="flex gap-4 pt-4">
            <ShimmerBlock className="w-32 h-11 rounded-full" />
            <ShimmerBlock className="w-32 h-11 rounded-full" />
          </div>
        </div>

        {/* Content/Portfolio Responsive Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((cardId) => (
            <div key={cardId} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              {/* Card Image area */}
              <ShimmerBlock className="w-full h-48 rounded-xl" />
              
              {/* Card Metadata */}
              <div className="space-y-2.5 pt-2">
                <ShimmerBlock className="w-1/3 h-4" />
                <ShimmerBlock className="w-full h-6" />
                <ShimmerBlock className="w-5/6 h-4" />
              </div>
              
              {/* Card Footer row */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                <ShimmerBlock className="w-20 h-4" />
                <ShimmerBlock className="w-8 h-8 rounded-full" />
              </div>
            </div>
          ))}
        </div>
        
      </main>
    </motion.div>
  );
}