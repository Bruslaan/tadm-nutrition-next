'use client';
import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

function FadeInAnimation({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '0% 0px -30% 0px' }); // You can adjust this margin for triggering points.

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.3 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.3 }}
      transition={{
        duration: 0.2 // Longer duration for smoother fade
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInAnimation;
