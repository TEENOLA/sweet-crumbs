import FadeIn from "./FadeIn";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80"
          alt="Fresh baked goods"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#fffaf2] opacity-75" />
      </div>
      <div className="relative z-10 px-8 md:px-16 lg:px-24 py-24 max-w-3xl">
        <FadeIn>
          <p className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#d9542d] mb-4">
            Fresh Baked Daily · Brooklyn, NY
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h1 className="font-playfair font-bold text-[clamp(3rem,7vw,5.5rem)] text-[#2b2118] leading-tight mb-6">
            Baked with love,
            <br />
            <span className="text-[#d9542d]">served with joy.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="font-inter text-[16px] text-[#6b5a45] leading-relaxed mb-10 max-w-lg">
            Handcrafted breads, pastries, and cakes made fresh every morning.
            From everyday treats to custom celebration cakes.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="/menu"
              className="font-inter text-[13px] font-bold bg-[#d9542d] text-[#fffaf2] px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-150"
            >
              View our menu
            </a>
            <a
              href="#contact"
              className="font-inter text-[13px] font-bold border-2 border-[#d9542d] text-[#d9542d] px-8 py-4 rounded-full hover:bg-[#d9542d] hover:text-[#fffaf2] transition-all duration-150"
            >
              Custom orders
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;
