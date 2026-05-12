import benefit1 from "../assets/benefit-1.webp";
import benefit2 from "../assets/benefit-2.webp";

const Benefits = () => {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 gap-20 items-stretch">
        {/* top content  */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-7.5">
          <div className="md:order-1">
            <img
              src={benefit1}
              alt="food benefit"
              className="w-full h-full max-h-120 rounded-[10px]"
            />
          </div>
          <div className="flex flex-col gap-4 md:pl-8 order-1 md:order-2 ">
            <h2 className="text-3xl lg:text-[40px] tracking-[0.25px] font-semibold text-foreground">
              Improve overall gastrointestinal health for better nutrient
              absorption
            </h2>

            <p className="text-light-text leading-relaxed tracking-[0.5px]">
              Through rigorous scientific studies and consultations with
              veterinarians, we have created a breakthrough formula exclusively
              tailored to combat the health challenges prevalent in dogs. A
              staggering 91% of our customers have reported significant
              improvements in their dogs' health after incorporating our product
              into their diet.
            </p>
          </div>
        </div>

        {/* bottom content  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 md:items-center">
          <div className="order-1 md:order-2">
            <img
              src={benefit2}
              alt="food benefit"
              className="w-full h-full max-h-120 rounded-[10px]"
            />
          </div>
          <div className="order-2 md:order-1 flex flex-col gap-4 md:pr-8">
            <h2 className="text-3xl lg:text-[40px] tracking-[0.25px] font-semibold text-foreground">
              Prebiotics nourish the beneficial gut bacteria, supporting
              digestive health
            </h2>

            <p className="text-light-text leading-relaxed tracking-[0.5px]">
              Our dog food formula contains carefully selected prebiotics that
              work in harmony with the gut microbiota, providing the necessary
              nutrients for the growth and maintenance of beneficial bacteria,
              ultimately supporting digestive health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
