import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) { return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .65, ease: 'easeOut' }}>{children}</motion.div>; }
export { Reveal };
