import FadeIn from "./FadeIn";
import { featuredItems } from "../data/content";

function FeaturedBakes() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=1600&q=80"
          alt="Bakery display"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#fcecd6] opacity-90" />
      </div>
      <div className="relative z-10 px-8 md:px-16 lg:px-24">
        <FadeIn>
          <p className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#d9542d] mb-3">
            What's fresh
          </p>
          <h2 className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-[#2b2118] mb-4">
            Today's bakes
          </h2>
          <p className="font-inter text-[14px] text-[#6b5a45] leading-relaxed mb-12 max-w-md">
            Everything is made fresh in-house every morning. Come early — our
            most popular items sell out fast!
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 100}>
              <div className="bg-[#fffaf2] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-playfair font-bold text-[18px] text-[#2b2118] mb-2">
                  {item.name}
                </h3>
                <p className="font-inter text-[13px] text-[#6b5a45] leading-relaxed mb-4">
                  {item.description}
                </p>
                <p className="font-inter font-bold text-[18px] text-[#d9542d]">
                  {item.price}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={300}>
          <a
            href="/menu"
            className="font-inter text-[13px] font-bold bg-[#d9542d] text-[#fffaf2] px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-150 inline-block"
          >
            See full menu →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

export default FeaturedBakes;
