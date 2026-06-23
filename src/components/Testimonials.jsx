import FadeIn from "./FadeIn";
import { testimonials } from "../data/content";

function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1600&q=80"
          alt="Bakery interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2b2118] opacity-85" />
      </div>
      <div className="relative z-10 px-8 md:px-16 lg:px-24">
        <FadeIn>
          <p className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#f3a23c] mb-3">
            What customers say
          </p>
          <h2 className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-[#fffaf2] mb-16">
            Reviews
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 100}>
              <div className="bg-[#fffaf2] bg-opacity-10 border border-[#fffaf2] border-opacity-20 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-[#f3a23c] text-[16px]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="font-inter text-[14px] text-[#fcecd6] leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-inter font-bold text-[13px] text-[#fffaf2]">
                    {testimonial.name}
                  </p>
                  <p className="font-inter text-[12px] text-[#f3a23c]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
