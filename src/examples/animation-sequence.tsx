'use client';
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3 // each child starts 0.3s after the previous one
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export function AnimationSequenceExample() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants}>First item</motion.div>
            <motion.div variants={itemVariants}>Second item</motion.div>
            <motion.div variants={itemVariants}>Third item</motion.div>
        </motion.div>
    );
}