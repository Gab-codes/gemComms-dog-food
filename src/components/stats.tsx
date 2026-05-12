import statsImg from "../assets/stats-img.png";

interface StatPoint {
  percentage: string;
  description: string;
}

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
    <div className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* left side */}
        <div className="flex flex-col h-full md:pr-8 gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl lg:text-[40px] font-semibold text-foreground tracking-[0.25px]">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>

            <p className="text-light-text leading-relaxed">
              Invest in your dog's future with our scientifically formulated
              superfood-powered supplements. Give them the nutrition they
              deserve and watch them thrive with vitality, energy, and the joy
              of a longer, healthier life.
            </p>
          </div>

          <div className="pt-4 flex-1 flex flex-col gap-4">
            <h3 className="text-[19px] font-semibold text-foreground">
              Key Points:
            </h3>

            <div className="flex flex-col gap-3">
              {statPoints.map((stat, index) => (
                <>
                  <div key={index} className="flex gap-12">
                    <div className="shrink-0">
                      <span className="text-[33px] tracking-[0.25px] font-bold text-primary">
                        {stat.percentage}
                      </span>
                    </div>
                    <div>
                      <p className="text-light-text">{stat.description}</p>
                    </div>
                  </div>

                  {index !== statPoints.length - 1 && (
                    <span className="border border-[#E3E3E8]" />
                  )}
                </>
              ))}
            </div>
          </div>

          <button className="mt-auto text-sm md:text-base bg-primary w-full text-white font-semibold py-3 px-10 cursor-pointer rounded-md transition-all duration-200 hover:scale-102 tracking-[0.5px]">
            Give your furry friend the gift of wholesome nutrition
          </button>
        </div>

        {/* right side */}
        <div className="h-full">
          <img
            src={statsImg}
            alt="Happy Dog with Dog Food"
            className="w-full h-full max-lg:max-h-142.5 rounded-[10px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
