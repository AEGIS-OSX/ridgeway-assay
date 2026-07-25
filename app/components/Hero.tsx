"use client";
import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";
import styles from "./Hero.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section id="hero" className={styles["hero-section"]}>
      <div className={styles["hero-inner"]}>
        <motion.div
          className={styles["hero-text"]}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="label-ui hero-eyebrow"
            variants={itemVariants}
          >
            Accredited Soil Analysis
          </motion.span>
          <motion.h1
            className={styles["hero-headline"]}
            variants={itemVariants}
          >
            Certified nutrient reports. Accredited routing. Chain-of-custody from field to result.
          </motion.h1>
          <motion.p
            className={styles["hero-subhead"]}
            variants={itemVariants}
          >
            Ridgeway Assay provides agricultural co-operatives with a verified lab network for soil and tissue analysis. We deliver certified results within five business days.
          </motion.p>
          <motion.div
            className={styles["hero-cta-row"]}
            variants={itemVariants}
          >
            <a href="#quote" className={styles["btn-primary"]}>
              Request a Quote
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles["hero-image-col"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* LCP image: needs fetchpriority="high" on the underlying <img */}
          <ProjectImage
            id="hero"
            className={styles["hero-img"]}
            alt="Ceramic crucible of soil and brass probe on a Field Linen surface"
          />
        </motion.div>
      </div>
    </section>
  );
}
