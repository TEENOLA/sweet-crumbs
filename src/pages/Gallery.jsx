import { useState, useEffect, useRef } from "react";

const CATEGORIES = [
  "All",
  "Pastries",
  "Cakes",
  "Breads",
  "Cookies",
  "Seasonal",
];

const ITEMS = [
  {
    id: 1,
    name: "Butter Croissant",
    cat: "Pastries",
    label: "Staff Favourite",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80",
    alt: "Butter croissants fresh from the oven",
  },
  {
    id: 2,
    name: "Vanilla Layer Cake",
    cat: "Cakes",
    label: null,
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    alt: "Vanilla layer cake with white frosting",
  },
  {
    id: 3,
    name: "Country Sourdough",
    cat: "Breads",
    label: null,
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    alt: "Country sourdough loaf",
  },
  {
    id: 4,
    name: "Brown Butter Cookie",
    cat: "Cookies",
    label: null,
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700&q=80",
    alt: "Brown butter chocolate chip cookies",
  },
  {
    id: 5,
    name: "Pumpkin Tartlet",
    cat: "Seasonal",
    label: "Seasonal",
    img: "https://images.unsplash.com/photo-1696721497670-d57754966c1e?q=80&w=700",
    alt: "Pumpkin tartlet with spiced filling",
  },
  {
    id: 6,
    name: "Strawberry Shortcake",
    cat: "Cakes",
    label: null,
    img: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80",
    alt: "Strawberry shortcake with fresh berries",
  },
  {
    id: 7,
    name: "Pain au Chocolat",
    cat: "Pastries",
    label: null,
    img: "https://images.unsplash.com/photo-1623334044303-241021148842?w=800&q=80",
    alt: "Pain au chocolat pastries",
  },
  {
    id: 8,
    name: "Seeded Rye Loaf",
    cat: "Breads",
    label: null,
    img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80",
    alt: "Seeded rye loaf on a wooden board",
  },
  {
    id: 9,
    name: "Pistachio Financier",
    cat: "Cookies",
    label: null,
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    alt: "Pistachio financier cakes",
  },
  {
    id: 10,
    name: "Lavender Honey Tart",
    cat: "Seasonal",
    label: "Seasonal",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    alt: "Lavender honey tart with floral garnish",
  },
];

// Lightbox component
function Lightbox({ item, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a0a02]/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] rounded-[4px] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.img}
          alt={item.alt}
          className="w-full h-full object-cover max-h-[80vh]"
        />
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a0a02]/90 to-transparent px-6 py-5">
          <p
            className="text-xl italic text-white font-normal"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {item.name}
          </p>
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-white/70 mt-1">
            {item.cat}
          </p>
        </div>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#1a0a02]/60 text-white hover:bg-[#C4724A] transition-colors text-sm font-medium"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

// Masonry column layout
function MasonryGrid({ items, onItemClick }) {
  const COLS = { mobile: 2, tablet: 3, desktop: 4 };

  // Split items across columns (top-to-bottom fill)
  const getColumns = (count) => {
    const cols = Array.from({ length: count }, () => []);
    items.forEach((item, i) => cols[i % count].push(item));
    return cols;
  };

  return (
    <>
      {/* Mobile: 2 cols */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {getColumns(2).map((col, ci) => (
          <div key={ci} className="flex flex-col gap-3">
            {col.map((item) => (
              <MasonryCard
                key={item.id}
                item={item}
                onClick={() => onItemClick(item)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Tablet: 3 cols */}
      <div className="hidden md:grid lg:hidden grid-cols-3 gap-3">
        {getColumns(3).map((col, ci) => (
          <div key={ci} className="flex flex-col gap-3">
            {col.map((item) => (
              <MasonryCard
                key={item.id}
                item={item}
                onClick={() => onItemClick(item)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Desktop: 4 cols */}
      <div className="hidden lg:grid grid-cols-4 gap-3">
        {getColumns(4).map((col, ci) => (
          <div key={ci} className="flex flex-col gap-3">
            {col.map((item) => (
              <MasonryCard
                key={item.id}
                item={item}
                onClick={() => onItemClick(item)}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

function MasonryCard({ item, onClick }) {
  // Vary aspect ratios to create true masonry feel
  const aspectMap = {
    1: "aspect-[3/4]",
    2: "aspect-[4/5]",
    3: "aspect-[3/4]",
    4: "aspect-square",
    5: "aspect-[4/5]",
    6: "aspect-[3/4]",
    7: "aspect-square",
    8: "aspect-[4/5]",
    9: "aspect-[3/4]",
    10: "aspect-square",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[4px] bg-[#E8DCCF] group cursor-pointer ${
        aspectMap[item.id] || "aspect-[3/4]"
      }`}
      onClick={onClick}
    >
      <img
        src={item.img}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />

      {/* Badge */}
      {item.label && (
        <span className="absolute top-3 left-3 text-[10px] font-medium tracking-widest uppercase px-[10px] py-1 bg-[#FAF6F1] text-[#C4724A] rounded-full z-10">
          {item.label}
        </span>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a02]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#C4724A]/50" />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <p
            className="text-base md:text-lg italic font-normal text-white leading-snug drop-shadow-sm"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {item.name}
          </p>
          <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/75 mt-1">
            {item.cat}
          </p>
          <p className="text-[10px] text-white/60 mt-2 tracking-wide">
            Click to enlarge
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [animating, setAnimating] = useState(false);

  const filtered =
    active === "All" ? ITEMS : ITEMS.filter((item) => item.cat === active);

  const handleCategoryChange = (cat) => {
    if (cat === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(cat);
      setAnimating(false);
    }, 180);
  };

  return (
    <main className="bg-[#FAF6F1] min-h-screen pb-20 text-[#2C1A0E]">
      {/* Header */}
      <div className="px-6 md:px-8 pt-12 pb-8 flex flex-col gap-2">
        <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#C4724A]">
          Made fresh daily · Brooklyn, NY
        </span>
        <h1
          className="text-[clamp(28px,6vw,42px)] font-normal leading-[1.1]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Baked with <em className="italic text-[#C4724A]">love</em>,<br />
          every single day.
        </h1>
        <p className="text-sm text-[#7A5C46] font-light mt-1 max-w-sm leading-relaxed">
          A peek inside our kitchen — from laminated pastries at dawn to
          celebration cakes at dusk.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="px-6 md:px-8 pb-7 flex gap-2 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
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
      <div className="mx-6 md:mx-8 border-t border-[#E8DCCF] mb-4" />
      <p className="px-6 md:px-8 mb-4 text-xs text-[#7A5C46] font-light">
        {active === "All"
          ? `Showing all ${filtered.length} photos`
          : `Showing ${filtered.length} photo${
              filtered.length !== 1 ? "s" : ""
            } in ${active}`}
      </p>

      {/* Masonry Grid */}
      <div
        className={`px-6 md:px-8 transition-opacity duration-180 ${
          animating ? "opacity-0" : "opacity-100"
        }`}
      >
        <MasonryGrid items={filtered} onItemClick={setLightbox} />
      </div>

      {/* CTA strip */}
      <div className="mx-6 md:mx-8 mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <span
          className="text-[clamp(18px,4vw,22px)] italic text-[#2C1A0E]"
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

      {/* Lightbox */}
      {lightbox && (
        <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
      )}
    </main>
  );
}
