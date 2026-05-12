import { motion } from "motion/react";
import statsImg from "../assets/stats-img.webp";

interface StatPoint {
  percentage: string;
  description: string;
}

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
      staggerChildren: 0.12,
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

const Stats = () => {
  const statPoints: StatPoint[] = [
    {
      percentage: "97%",
      description:
        "Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.",
    },
    {
      percentage: "84%",
      description:
        "Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.",
    },
    {
      percentage: "92%",
      description:
        "Our dog food's high protein and fat digestibility contribute to ideal stool quality.",
    },
  ];

  return (
    <motion.div
      className="py-16 px-4 sm:px-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* left side */}
        <motion.div
          className="flex flex-col h-full md:pr-8 gap-12"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl lg:text-[40px] font-semibold text-foreground tracking-[0.25px]"
              variants={itemVariants}
            >
              Nutrition is the foundation for longer, healthier lives in dogs.
            </motion.h2>

            <motion.p
              className="text-light-text leading-relaxed"
              variants={itemVariants}
            >
              Invest in your dog's future with our scientifically formulated
              superfood-powered supplements. Give them the nutrition they
              deserve and watch them thrive with vitality, energy, and the joy
              of a longer, healthier life.
            </motion.p>
          </motion.div>

          <motion.div
            className="pt-4 flex-1 flex flex-col gap-4"
            variants={containerVariants}
          >
            <motion.h3
              className="text-[19px] font-semibold text-foreground"
              variants={itemVariants}
            >
              Key Points:
            </motion.h3>

            <div className="flex flex-col gap-3">
              {statPoints.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div className="flex gap-12" variants={itemVariants}>
                    <motion.div
                      className="shrink-0"
                      whileHover={{
                        scale: 1.1,
                        transition: springTransition,
                      }}
                    >
                      <span className="text-[33px] tracking-[0.25px] font-bold text-primary">
                        {stat.percentage}
                      </span>
                    </motion.div>
                    <div>
                      <p className="text-light-text">{stat.description}</p>
                    </div>
                  </motion.div>

                  {index !== statPoints.length - 1 && (
                    <motion.span
                      className="border border-[#E3E3E8] block mt-3"
                      variants={itemVariants}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.button
            className="mt-auto text-sm md:text-base bg-primary w-full text-white font-semibold py-3 px-10 cursor-pointer rounded-md transition-none tracking-[0.5px]"
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: springTransition }}
            whileTap={{ scale: 0.98 }}
          >
            Give your furry friend the gift of wholesome nutrition
          </motion.button>
        </motion.div>

        {/* right side */}
        <motion.div
          className="h-full"
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: springTransition }}
        >
          <img
            src={statsImg}
            alt="Happy Dog with Dog Food"
            className="w-full h-full max-lg:max-h-142.5 rounded-[10px] object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Stats;
