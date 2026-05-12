import { motion } from "motion/react";
import realFood from "../assets/icons/food.svg";
import petFood from "../assets/icons/pet-food.svg";
import petBowl from "../assets/icons/pet-bowl.svg";
import vet from "../assets/icons/vet.svg";
import hero from "../assets/hero.webp";
import shieldCheck from "../assets/icons/shield-check.svg";
import paypal from "../assets/icons/paypal.svg";
import visa from "../assets/icons/visa.svg";
import mastercard from "../assets/icons/mastercard.svg";
import applePay from "../assets/icons/apple-pay.svg";
import googlePay from "../assets/icons/google-pay.svg";

// Spring transition config for smooth, premium feel
const springTransition = {
  stiffness: 100,
  damping: 30,
  mass: 1,
} as const;

// Stagger container for sequenced animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.35,
    },
  },
};

// Individual item animations
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

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <motion.div
        className="flex flex-col gap-8 md:gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl lg:text-[40] text-center font-semibold text-foreground leading-tight mb-8"
          variants={itemVariants}
        >
          What makes us different
          <br />
          makes them stronger
        </motion.h1>

        <motion.div
          className="flex max-md:flex-col gap-7.5 items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* left Food img */}
          <motion.div
            className="flex flex-col gap-6 md:gap-20"
            variants={containerVariants}
          >
            <motion.div
              className="flex gap-3 md:gap-6 sm:max-w-100 md:max-w-92.5 items-start"
              variants={itemVariants}
              whileHover={{ x: 8, transition: springTransition }}
            >
              <motion.div
                className="size-15"
                whileHover={{ scale: 1.1, transition: springTransition }}
              >
                <img src={realFood} alt="Real Food" className="w-full h-full" />
              </motion.div>
              <div className="flex flex-col gap-0.5 md:gap-2">
                <h3 className="md:text-[19px] md:tracking-[0.5px] font-semibold text-foreground">
                  Real Food
                </h3>
                <p className="text-sm md:text-base text-light-text">
                  Wholesome recipes for dogs with real meat and veggies.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-3 md:gap-6 sm:max-w-100 md:max-w-92.5 items-start"
              variants={itemVariants}
              whileHover={{ x: 8, transition: springTransition }}
            >
              <motion.div
                className="size-15"
                whileHover={{ scale: 1.1, transition: springTransition }}
              >
                <img
                  src={petBowl}
                  alt="Premium Ingredient"
                  className="w-full h-full"
                />
              </motion.div>
              <div className="flex flex-col gap-0.5 md:gap-2">
                <h3 className="md:text-[19px] md:tracking-[0.5px] font-semibold text-foreground">
                  Premium Ingredient
                </h3>
                <p className="text-sm md:text-base text-light-text">
                  Elevating pet care with unmatched safety and quality.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* center hero image  */}
          <motion.div
            className="size-70 sm:size-85 md:size-92.5 flex items-center"
            variants={imageVariants}
            whileHover={{ scale: 1.03, transition: springTransition }}
          >
            <img
              src={hero}
              alt="Happy dog eating healthy meal"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </motion.div>

          {/* right food image  */}
          <motion.div
            className="flex flex-col items-center gap-6 md:gap-20"
            variants={containerVariants}
          >
            <motion.div
              className="flex gap-3 md:gap-6 sm:max-w-100 md:max-w-92.5 items-start"
              variants={itemVariants}
              whileHover={{ x: -8, transition: springTransition }}
            >
              <motion.div
                className="size-15"
                whileHover={{ scale: 1.1, transition: springTransition }}
              >
                <img src={petFood} alt="Real Food" className="w-full h-full" />
              </motion.div>
              <div className="flex flex-col gap-0.5 md:gap-2">
                <h3 className="md:text-[19px] md:tracking-[0.5px] font-semibold text-foreground">
                  Made Fresh
                </h3>
                <p className="text-sm md:text-base text-light-text">
                  We prioritize maintaining the integrity of whole foods and
                  nutrition.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-3 md:gap-6 sm:max-w-100 md:max-w-92.5 items-start"
              variants={itemVariants}
              whileHover={{ x: -8, transition: springTransition }}
            >
              <motion.div
                className="size-15"
                whileHover={{ scale: 1.1, transition: springTransition }}
              >
                <img
                  src={vet}
                  alt="Premium Ingredient"
                  className="w-full h-full"
                />
              </motion.div>
              <div className="flex flex-col gap-0.5 md:gap-2">
                <h3 className="md:text-[19px] md:tracking-[0.5px] font-semibold text-foreground">
                  Vet Developed
                </h3>
                <p className=" text-sm md:text-base text-light-text">
                  We raise the bar for dog nutrition, surpassing industry
                  expectations.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex flex-col gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="bg-primary max-md:mt-2 text-white font-semibold py-3 px-10 cursor-pointer rounded-md transition-none tracking-[0.5px]"
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: springTransition }}
            whileTap={{ scale: 0.98 }}
          >
            Get your dog's healthy meal today!
          </motion.button>

          {/* Payment Methods */}
          <motion.div
            className="flex max-md:justify-center items-center flex-wrap gap-6 text-sm text-gray-500"
            variants={containerVariants}
          >
            <motion.div
              className="flex gap-2 items-center"
              variants={itemVariants}
            >
              <img src={shieldCheck} alt="shield icon" className="size-4" />
              <span>30-day money back guarantee</span>
            </motion.div>
            <motion.div className="flex gap-2" variants={containerVariants}>
              {[paypal, visa, mastercard, applePay, googlePay].map(
                (icon, idx) => (
                  <motion.img
                    key={idx}
                    src={icon}
                    alt={`payment method ${idx}`}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { ...springTransition, delay: idx * 0.1 },
                      },
                    }}
                  />
                ),
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
