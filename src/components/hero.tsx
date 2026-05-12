import realFood from "../assets/icons/food.svg";
import petFood from "../assets/icons/pet-food.svg";
import petBowl from "../assets/icons/pet-bowl.svg";
import vet from "../assets/icons/vet.svg";
import hero from "../assets/hero.png";
import shieldCheck from "../assets/icons/shield-check.svg";
import paypal from "../assets/icons/paypal.svg";
import visa from "../assets/icons/visa.svg";
import mastercard from "../assets/icons/mastercard.svg";
import applePay from "../assets/icons/apple-pay.svg";
import googlePay from "../assets/icons/google-pay.svg";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex flex-col gap-8 md:gap-12 items-center">
        <h1 className="text-3xl lg:text-[40] text-center font-semibold text-foreground leading-tight mb-8">
          What makes us different
          <br />
          makes them stronger
        </h1>

        <div className="flex max-md:flex-col gap-7.5 items-center justify-between">
          {/* left Food img */}
          <div className="flex flex-col gap-6 md:gap-20">
            <div className="flex gap-3 md:gap-6 sm:max-w-100 md:max-w-92.5 items-start">
              <div className="size-15">
                <img src={realFood} alt="Real Food" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-0.5 md:gap-2">
                <h3 className="md:text-[19px] md:tracking-[0.5px] font-semibold text-foreground">
                  Real Food
                </h3>
                <p className="text-sm md:text-base text-light-text">
                  Wholesome recipes for dogs with real meat and veggies.
                </p>
              </div>
            </div>

            <div className="flex gap-3 md:gap-6 sm:max-w-100 md:max-w-92.5 items-start">
              <div className="size-15">
                <img
                  src={petBowl}
                  alt="Premium Ingredient"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-0.5 md:gap-2">
                <h3 className="md:text-[19px] md:tracking-[0.5px] font-semibold text-foreground">
                  Premium Ingredient
                </h3>
                <p className="text-sm md:text-base text-light-text">
                  Elevating pet care with unmatched safety and quality.
                </p>
              </div>
            </div>
          </div>
          {/* center hero image  */}
          <div className="size-70 sm:size-85 md:size-92.5 flex items-center">
            <img
              src={hero}
              alt="Happy dog eating healthy meal"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* right food image  */}
          <div className="flex flex-col items-center gap-6 md:gap-20">
            <div className="flex gap-3 md:gap-6 sm:max-w-100 md:max-w-92.5 items-start">
              <div className="size-15">
                <img src={petFood} alt="Real Food" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-0.5 md:gap-2">
                <h3 className="md:text-[19px] md:tracking-[0.5px] font-semibold text-foreground">
                  Made Fresh
                </h3>
                <p className="text-sm md:text-base text-light-text">
                  We prioritize maintaining the integrity of whole foods and
                  nutrition.
                </p>
              </div>
            </div>

            <div className="flex gap-3 md:gap-6 sm:max-w-100 md:max-w-92.5 items-start">
              <div className="size-15">
                <img
                  src={vet}
                  alt="Premium Ingredient"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-0.5 md:gap-2">
                <h3 className="md:text-[19px] md:tracking-[0.5px] font-semibold text-foreground">
                  Vet Developed
                </h3>
                <p className=" text-sm md:text-base text-light-text">
                  We raise the bar for dog nutrition, surpassing industry
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col gap-3">
          <button className="bg-primary max-md:mt-2 text-white font-semibold py-3 px-10 cursor-pointer rounded-md transition-all duration-200 hover:scale-102 tracking-[0.5px]">
            Get your dog's healthy meal today!
          </button>

          {/* Payment Methods */}
          <div className="flex max-md:justify-center items-center flex-wrap gap-6 text-sm text-gray-500">
            <div className="flex gap-2 items-center">
              <img src={shieldCheck} alt="shield icon" className="size-4" />
              <span>30-day money back guarantee</span>
            </div>
            <div className="flex gap-2">
              <img src={paypal} alt="paypal" />
              <img src={visa} alt="visa" />
              <img src={mastercard} alt="mastercard" />
              <img src={applePay} alt="apple pay" />
              <img src={googlePay} alt="google pay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
