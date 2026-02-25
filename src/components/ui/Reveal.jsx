import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const defaultViewport = { once: true, amount: 0.2 };

export const Reveal = ({
  children,
  className,
  delay = 0,
  y = 22,
  as = "div",
  viewport = defaultViewport,
}) => {
  const reduced = usePrefersReducedMotion();
  const Component = motion[as] || motion.div;

  if (reduced) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.9, 0.2, 1] }}
    >
      {children}
    </Component>
  );
};
