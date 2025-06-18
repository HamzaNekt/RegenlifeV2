import { motion } from 'framer-motion';
import regenlifeLogo from '../assets/logo/regenlife-logo-blanc.png';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <div className={`flex justify-center items-center ${className}`} style={{ background: '#1c2431' }}>
      <div className="relative flex flex-col items-center justify-center">
        <img 
          src={regenlifeLogo} 
          alt="Regenlife Logo" 
          className={`${sizeClasses[size]} object-contain z-10 relative`}
        />
        <span className="-mt-1 text-2xl font-baskerville text-white select-none z-10">Regenlife</span>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            scale: [0.9, 1.1],
            opacity: [0.8, 0]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className={`${sizeClasses[size]} border-2`} style={{ borderColor: '#2e333f', borderRadius: '9999px' }} />
        </motion.div>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            scale: [1.2, 1.4],
            opacity: [0.8, 0]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        >
          <div className={`${sizeClasses[size]} border-2`} style={{ borderColor: '#2e333f', borderRadius: '9999px' }} />
        </motion.div>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            scale: [1.5, 1.7],
            opacity: [0.8, 0]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4
          }}
        >
          <div className={`${sizeClasses[size]} border-2`} style={{ borderColor: '#2e333f', borderRadius: '9999px' }} />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 
