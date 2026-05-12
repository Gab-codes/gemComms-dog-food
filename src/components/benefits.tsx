import { motion } from "motion/react";
import benefit1 from "../assets/benefit-1.webp";
import benefit2 from "../assets/benefit-2.webp";

const springTransition = {
  stiffness: 100,
  damping: 30,
  mass: 1,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

const Benefits = () => {
  return (
    <motion.section
      className="py-16 px-4 sm:px-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 gap-20 items-stretch">
        {/* top content  */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-7.5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="md:order-1"
            variants={imageVariants}
            whileHover={{ scale: 1.03, transition: springTransition }}
          >
            <img
              src={benefit1}
              alt="food benefit"
              className="w-full h-full max-h-120 rounded-[10px]"
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-4 md:pl-8 order-1 md:order-2"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl lg:text-[40px] tracking-[0.25px] font-semibold text-foreground"
              variants={itemVariants}
            >
              Improve overall gastrointestinal health for better nutrient
              absorption
            </motion.h2>

            <motion.p
              className="text-light-text leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
            >
              Through rigorous scientific studies and consultations with
              veterinarians, we have created a breakthrough formula exclusively
              tailored to combat the health challenges prevalent in dogs. A
              staggering 91% of our customers have reported significant
              improvements in their dogs' health after incorporating our product
              into their diet.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* bottom content  */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-7.5 md:items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="order-1 md:order-2"
            variants={imageVariants}
            whileHover={{ scale: 1.03, transition: springTransition }}
          >
            <img
              src={benefit2}
              alt="food benefit"
              className="w-full h-full max-h-120 rounded-[10px]"
            />
          </motion.div>
          <motion.div
            className="order-2 md:order-1 flex flex-col gap-4 md:pr-8"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl lg:text-[40px] tracking-[0.25px] font-semibold text-foreground"
              variants={itemVariants}
            >
              Prebiotics nourish the beneficial gut bacteria, supporting
              digestive health
            </motion.h2>

            <motion.p
              className="text-light-text leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
            >
              Our dog food formula contains carefully selected prebiotics that
              work in harmony with the gut microbiota, providing the necessary
              nutrients for the growth and maintenance of beneficial bacteria,
              ultimately supporting digestive health.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Benefits;
