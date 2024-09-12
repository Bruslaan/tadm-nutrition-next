'use client';
import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

function FadeInAnimation({
  children,
  withTransform
}: {
  children: ReactNode;
  withTransform?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50% 0px -30% 0px' }); // You can adjust this margin for triggering points.

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: withTransform ? 40 : 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: withTransform ? 20 : 0 }}
      transition={{
        duration: 0.5, // Longer duration for smoother fade
        ease: 'easeInOut' // Easing for a smooth effect
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInAnimation;
