import { motion } from 'framer-motion';
import regenlifeLogo from '../assets/logo/regenlife-logo-bleu.png';

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
    <div className={`flex justify-center items-center ${className}`}>
      <div className="relative">
        <img 
          src={regenlifeLogo} 
          alt="Regenlife Logo" 
          className={`${sizeClasses[size]} object-contain z-10 relative`}
        />
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
          <div className={`${sizeClasses[size]} border-2 border-primary/40 rounded-full`} />
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
          <div className={`${sizeClasses[size]} border-2 border-primary/40 rounded-full`} />
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
          <div className={`${sizeClasses[size]} border-2 border-primary/40 rounded-full`} />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 