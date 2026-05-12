import benefit1 from "../assets/benefit-1.png";
import benefit2 from "../assets/benefit-2.png";

const Benefits = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 gap-20 items-stretch">
        {/* top content  */}
        <div className="grid grid-cols-2 items-center gap-7.5">
          <div>
            <img
              src={benefit1}
              alt="food benefit"
              className="w-full h-full max-h-120 rounded-[10px]"
            />
          </div>
          <div className="flex flex-col gap-4 pl-8">
            <h2 className="text-4xl lg:text-[40px] font-semibold text-foreground">
              Improve overall gastrointestinal health for better nutrient
              absorption
            </h2>

            <p className="text-[#424153] leading-relaxed">
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
        <div className="grid grid-cols-2 gap-7.5 items-center">
          <div className="flex flex-col gap-4 pr-8">
            <h2 className="text-4xl lg:text-[40px] font-semibold text-foreground">
              Prebiotics nourish the beneficial gut bacteria, supporting
              digestive health
            </h2>

            <p className="text-[#424153] leading-relaxed">
              Our product is meticulously crafted with a blend of prebiotics,
              probiotics, and a unique blend of nutrients that nourish the
              beneficial gut bacteria, supporting digestive health and overall
              well-being. By promoting a healthy gut microbiome, our product
              helps to enhance nutrient absorption, boost the immune system, and
              improve overall gastrointestinal health in dogs.
            </p>
          </div>
          <div>
            <img
              src={benefit2}
              alt="food benefit"
              className="w-full h-full max-h-120 rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
