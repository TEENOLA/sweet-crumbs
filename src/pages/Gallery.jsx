import { useState } from "react";

const CATEGORIES = [
  "All",
  "Pastries",
  "Cakes",
  "Breads",
  "Cookies",
  "Seasonal",
];

// span is used in "All" view only — filtered view uses col-span-6 for every card
// so there are never orphaned asymmetric columns when a category has fewer items.
const ITEMS = [
  {
    id: 1,
    name: "Butter Croissant",
    cat: "Pastries",
    label: "Staff Favourite",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80",
    alt: "Butter croissants fresh from the oven",
    span: "col-span-8 min-h-[340px]",
  },
  {
    id: 2,
    name: "Vanilla Layer Cake",
    cat: "Cakes",
    label: null,
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    alt: "Vanilla layer cake with white frosting",
    span: "col-span-4 min-h-[340px]",
  },
  {
    id: 3,
    name: "Country Sourdough",
    cat: "Breads",
    label: null,
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    alt: "Country sourdough loaf",
    span: "col-span-4 min-h-[260px]",
  },
  {
    id: 4,
    name: "Brown Butter Cookie",
    cat: "Cookies",
    label: null,
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700&q=80",
    alt: "Brown butter chocolate chip cookies",
    span: "col-span-5 min-h-[260px]",
  },
  {
    id: 5,
    name: "Pumpkin Tartlet",
    cat: "Seasonal",
    label: "Seasonal",
    img: "https://images.unsplash.com/photo-1696721497670-d57754966c1e?q=80&w=700",
    alt: "Pumpkin tartlet with spiced filling",
    span: "col-span-3 min-h-[260px]",
  },
  {
    id: 6,
    name: "Strawberry Shortcake",
    cat: "Cakes",
    label: null,
    img: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80",
    alt: "Strawberry shortcake with fresh berries",
    span: "col-span-6 min-h-[300px]",
  },
  {
    id: 7,
    name: "Pain au Chocolat",
    cat: "Pastries",
    label: null,
    img: "https://images.unsplash.com/photo-1623334044303-241021148842?w=800&q=80",
    alt: "Pain au chocolat pastries",
    span: "col-span-6 min-h-[300px]",
  },
  {
    id: 8,
    name: "Seeded Rye Loaf",
    cat: "Breads",
    label: null,
    img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80",
    alt: "Seeded rye loaf on a wooden board",
    span: "col-span-4 min-h-[260px]",
  },
  {
    id: 9,
    name: "Pistachio Financier",
    cat: "Cookies",
    label: null,
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    alt: "Pistachio financier cakes",
    span: "col-span-4 min-h-[260px]",
  },
  {
    id: 10,
    name: "Lavender Honey Tart",
    cat: "Seasonal",
    label: "Seasonal",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    alt: "Lavender honey tart with floral garnish",
    span: "col-span-4 min-h-[260px]",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? ITEMS : ITEMS.filter((item) => item.cat === active);

  return (
    <main className="bg-[#FAF6F1] min-h-screen pb-20 text-[#2C1A0E]">
      {/* Header */}
      <div className="px-8 pt-12 pb-8 flex flex-col gap-2">
        <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#C4724A]">
          Made fresh daily · Brooklyn, NY
        </span>
        <h1 className="font-playfair text-[42px] font-normal leading-[1.1]">
          Baked with <em className="italic text-[#C4724A]">love</em>,<br />
          every single day.
        </h1>
        <p className="text-sm text-[#7A5C46] font-light mt-1 max-w-sm leading-relaxed">
          A peek inside our kitchen — from laminated pastries at dawn to
          celebration cakes at dusk.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="px-8 pb-7 flex gap-2 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs font-medium tracking-wide px-4 py-[7px] rounded-full border transition-all duration-150 ${
              active === cat
                ? "bg-[#C4724A] border-[#C4724A] text-[#FAF6F1]"
                : "border-[#D9C7B8] text-[#7A5C46] hover:border-[#C4724A] hover:text-[#C4724A] hover:bg-[#F2EDEA]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Divider + count */}
      <div className="mx-8 border-t border-[#E8DCCF] mb-4" />
      <p className="px-8 mb-4 text-xs text-[#7A5C46] font-light">
        {active === "All"
          ? `Showing all ${filtered.length} photos`
          : `Showing ${filtered.length} photo${
              filtered.length !== 1 ? "s" : ""
            } in ${active}`}
      </p>

      {/* Grid
          — "All" view: 12-col asymmetric layout using each item's span class
          — Filtered view: clean 2-col grid so there are never orphaned gaps */}
      <div
        className={`px-8 gap-3 ${
          active === "All" ? "grid grid-cols-12" : "grid grid-cols-2"
        }`}
      >
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-[4px] bg-[#E8DCCF] group min-h-[280px] ${
              active === "All" ? item.span : ""
            }`}
          >
            <img
              src={item.img}
              alt={item.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />

            {/* Badge */}
            {item.label && (
              <span className="absolute top-4 left-4 text-[10px] font-medium tracking-widest uppercase px-[10px] py-1 bg-[#FAF6F1] text-[#C4724A] rounded-full">
                {item.label}
              </span>
            )}

            {/* Hover overlay
                Fix: bottom gradient layer ensures text is always legible regardless
                of how light or dark the underlying image is. Terracotta tint sits on
                top; the gradient-to-black base locks in contrast on pale images. */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms]">
              {/* dark base gradient for legibility on light images */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a02]/80 via-transparent to-transparent" />
              {/* terracotta colour wash */}
              <div className="absolute inset-0 bg-[#C4724A]/60" />
              {/* text */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <p
                  className="text-xl italic font-normal text-white leading-snug drop-shadow-sm"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.name}
                </p>
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/75 mt-1">
                  {item.cat}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div className="mx-8 mt-10 flex items-center gap-5">
        <span
          className="text-[22px] italic text-[#2C1A0E]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Want something custom?
        </span>
        <a
          href="/order"
          className="text-xs font-medium tracking-[0.1em] uppercase px-6 py-3 bg-[#C4724A] text-[#FAF6F1] rounded-[2px] hover:bg-[#A85D38] transition-colors flex-shrink-0"
        >
          Order yours →
        </a>
      </div>
    </main>
  );
}
