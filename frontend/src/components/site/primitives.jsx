import { motion } from "framer-motion";

export const LOGO_URL = "/logo.png";

export const Reveal = ({ children, delay = 0, y = 24, className = "", ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const SectionLabel = ({ children, className = "" }) => (
  <span
    className={`inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#9F8BFF] ${className}`}
  >
    {children}
  </span>
);
