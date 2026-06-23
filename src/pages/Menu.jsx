import { useState } from "react";
import FadeIn from "../components/FadeIn";
import { menuItems } from "../data/content";

const categories = ["All", "Breads", "Pastries", "Cakes", "Seasonal"];

function CustomOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    occasion: "",
    size: "",
    date: "",
    vision: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [occasionOpen, setOccasionOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);

  const occasionOptions = [
    { value: "birthday", label: "Birthday" },
    { value: "wedding", label: "Wedding" },
    { value: "anniversary", label: "Anniversary" },
    { value: "corporate", label: "Corporate Event" },
    { value: "other", label: "Other" },
  ];

  const sizeOptions = [
    { value: "6inch", label: '6" — serves 8' },
    { value: "8inch", label: '8" — serves 12' },
    { value: "10inch", label: '10" — serves 20' },
    { value: "tiered", label: "Tiered — custom" },
  ];

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <FadeIn>
        <p className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#f3a23c] mb-3">
          Made to order
        </p>
        <h2 className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-[#fffaf2] mb-4">
          Custom cakes & events
        </h2>
        <p className="font-inter text-[14px] text-[#cbb89e] leading-relaxed">
          Planning a birthday, wedding, or celebration? Tell us about your event
          and we'll create something special. We recommend ordering at least 3
          days in advance for custom designs.
        </p>
      </FadeIn>
      <FadeIn delay={150}>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#fcecd6]">
                Your name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="font-inter text-[13px] text-[#2b2118] bg-[#fffaf2] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f3a23c]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#fcecd6]">
                Phone
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (718) 555-0000"
                className="font-inter text-[13px] text-[#2b2118] bg-[#fffaf2] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f3a23c]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#fcecd6]">
              Occasion
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setOccasionOpen((prev) => !prev)}
                className="w-full font-inter text-[13px] text-left bg-[#fffaf2] rounded-xl px-4 py-3 outline-none flex items-center justify-between"
              >
                <span
                  className={
                    formData.occasion ? "text-[#2b2118]" : "text-[#a08c74]"
                  }
                >
                  {occasionOptions.find((o) => o.value === formData.occasion)
                    ?.label || "Select occasion"}
                </span>
                <span className="text-[#a08c74] text-[12px]">▾</span>
              </button>
              {occasionOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#fffaf2] rounded-xl border border-[#e8d5b7] z-10 mt-1 overflow-hidden">
                  {occasionOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          occasion: option.value,
                        }));
                        setOccasionOpen(false);
                      }}
                      className="w-full font-inter text-[13px] text-left px-4 py-3 text-[#6b5a45] hover:bg-[#fcecd6] hover:text-[#2b2118] transition-colors duration-150"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#fcecd6]">
              Cake size
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setSizeOpen((prev) => !prev)}
                className="w-full font-inter text-[13px] text-left bg-[#fffaf2] rounded-xl px-4 py-3 outline-none flex items-center justify-between"
              >
                <span
                  className={
                    formData.size ? "text-[#2b2118]" : "text-[#a08c74]"
                  }
                >
                  {sizeOptions.find((o) => o.value === formData.size)?.label ||
                    "Select size"}
                </span>
                <span className="text-[#a08c74] text-[12px]">▾</span>
              </button>
              {sizeOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#fffaf2] rounded-xl border border-[#e8d5b7] z-10 mt-1 overflow-hidden">
                  {sizeOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          size: option.value,
                        }));
                        setSizeOpen(false);
                      }}
                      className="w-full font-inter text-[13px] text-left px-4 py-3 text-[#6b5a45] hover:bg-[#fcecd6] hover:text-[#2b2118] transition-colors duration-150"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#fcecd6]">
              Date needed
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="font-inter text-[13px] text-[#2b2118] bg-[#fffaf2] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f3a23c]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#fcecd6]">
              Your vision
            </label>
            <textarea
              name="vision"
              value={formData.vision}
              onChange={handleChange}
              placeholder="Tell us about flavors, design, theme, colours..."
              rows={4}
              className="font-inter text-[13px] text-[#2b2118] bg-[#fffaf2] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f3a23c] resize-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className={`font-inter text-[13px] font-bold py-4 rounded-full transition-all duration-300 ${
              submitted
                ? "bg-green-600 text-white"
                : "bg-[#d9542d] text-[#fffaf2] hover:opacity-90"
            }`}
          >
            {submitted ? "Request sent ✓" : "Submit request"}
          </button>
        </div>
      </FadeIn>
    </div>
  );
}

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#fffaf2]">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=1600&q=80"
            alt="Menu header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#fcecd6] opacity-88" />
        </div>
        <div className="relative z-10 px-8 md:px-16 lg:px-24">
          <FadeIn>
            <p className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#d9542d] mb-3">
              Fresh every day
            </p>
            <h1 className="font-playfair font-bold text-[clamp(2.5rem,5vw,4rem)] text-[#2b2118] mb-4">
              Our menu
            </h1>
            <p className="font-inter text-[15px] text-[#6b5a45] leading-relaxed mb-10 max-w-lg">
              Everything is baked fresh in-house using locally sourced
              ingredients. Come early — our most popular items sell out fast!
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex items-center gap-3 mb-12 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-inter text-[13px] font-bold px-6 py-2.5 rounded-full transition-colors duration-150 ${
                    activeCategory === category
                      ? "bg-[#d9542d] text-[#fffaf2]"
                      : "bg-[#fffaf2] text-[#6b5a45] hover:text-[#d9542d]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <FadeIn key={item.id} delay={index * 80}>
                <div className="bg-[#fffaf2] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <span className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#d9542d] mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="font-playfair font-bold text-[18px] text-[#2b2118] mb-2">
                      {item.name}
                    </h3>
                    <p className="font-inter text-[13px] text-[#6b5a45] leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <p className="font-inter font-bold text-[20px] text-[#d9542d]">
                      {item.price}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=1600&q=80"
            alt="Custom cakes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2b2118] opacity-90" />
        </div>
        <div className="relative z-10 px-8 md:px-16 lg:px-24">
          <CustomOrderForm />
        </div>
      </section>
    </div>
  );
}

export default Menu;
